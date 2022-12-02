import { useEffect, useState } from 'react';
import { ICaption, ICaptionTrack } from '../types';

export default function useVideoInfo(url: string) {
	const [videoInfo, setVideoInfo] = useState<any | null>(null);

	useEffect(() => {
		if (!url) {
			return;
		}

		const videoId = getYoutubeVideoIdFromUrl(url);

		if (!videoId) {
			return;
		}

		getYoutubeInfo({ videoId }).then((info) => {
			setVideoInfo(info);
		});
	}, [url]);

	return videoInfo;
}

export async function getYoutubeInfo({
	videoId,
	language = 'en',
}: {
	videoId: string;
	language?: string;
}) {
	const url = `https://video-stream-info-0t47m3binksc.runkit.sh/ytinfo?url=${videoId}`;
	const videoInfo = await fetch(url).then((t) => t.json());

	let captions: ICaption[] = [];
	if (videoInfo?.tracks?.length > 0) {
		captions = await getYoutubeCaptions(videoInfo.tracks, language);
	}

	return { ...videoInfo, captions };
}

export async function getYoutubeCaptions(
	captionTracks: ICaptionTrack[],
	language = 'en'
): Promise<ICaption[]> {
	const resp = await fetch(findBestTranscriptUrl(captionTracks, language))
		.then((response) => response.text())
		.then((str) => new window.DOMParser().parseFromString(str, 'text/xml'));

	const sentenceNodes = Array.from(resp.getElementsByTagName('text'));
	return sentenceNodes.map((sentence, index) => ({
		id: index,
		start: parseFloat(sentence.getAttribute('start') as string),
		duration: parseFloat(sentence.getAttribute('dur') as string),
		text: decodeHtmlCharCodes(sentence.textContent as string),
	}));
}

const findBestTranscriptUrl = (
	captionTracks: ICaptionTrack[],
	language = 'en'
): string => {
	const trackMatchesByLanguage = captionTracks
		.filter((track) => track.languageCode === language)
		.sort((a, b) => (b.name.simpleText.includes('auto-generated') ? -1 : 1));

	return (trackMatchesByLanguage[0] || captionTracks[0])?.baseUrl ?? '';
};

const decodeHtmlCharCodes = (str: string) =>
	str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
		String.fromCharCode(charCode)
	);

const validQueryDomains = new Set([
	'youtube.com',
	'www.youtube.com',
	'm.youtube.com',
	'music.youtube.com',
	'gaming.youtube.com',
]);

const validPathDomains =
	/^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/;

export const getYoutubeVideoIdFromUrl = (url: string) => {
	const parsed = new URL(url.trim());
	let id = parsed.searchParams.get('v');
	if (validPathDomains.test(url.trim()) && !id) {
		const paths = parsed.pathname.split('/');
		id = parsed.host === 'youtu.be' ? paths[1] : paths[2];
	} else if (parsed.hostname && !validQueryDomains.has(parsed.hostname)) {
		throw Error('Not a YouTube domain');
	}
	if (!id) {
		throw Error(`No video id found: "${url}"`);
	}
	id = id.substring(0, 11);
	if (!validateID(id)) {
		throw TypeError(
			`Video id (${id}) does not match expected ` +
				`format (${idRegex.toString()})`
		);
	}
	return id;
};
const idRegex = /^[a-zA-Z0-9-_]{11}$/;
const validateID = (id: string) => idRegex.test(id.trim());

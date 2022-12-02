export interface Video {
	type: string;
	id: string;
}

export interface VideoInfo {}

export interface ICaptionTrack {
	baseUrl: string;
	isTranslatable: boolean;
	languageCode: string;
	name: { simpleText: string };
	vssId: string;
}
export interface ICaption {
	id: number;
	start: number;
	duration: number;
	text: string;
}

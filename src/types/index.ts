export interface Video {
	type: string;
	id: string;
}

export interface VideoInfo {}

export interface CaptionTrack {
	baseUrl: string;
	isTranslatable: boolean;
	languageCode: string;
	name: { simpleText: string };
	vssId: string;
}

export interface Caption {
	id: number;
	start: number;
	duration: number;
	text: string;
}

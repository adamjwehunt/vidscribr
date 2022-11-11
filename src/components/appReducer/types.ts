import { Reducer } from 'react';

export interface AppReducerState {
	url: string;
	isPlaying: boolean;
	duration: number;
	progress: number;
}

export type AppReducerAction =
	| {
			type: 'url';
			url: string;
	  }
	| {
			type: 'play';
	  }
	| {
			type: 'pause';
	  }
	| {
			type: 'duration';
			seconds: number;
	  }
	| {
			type: 'progress';
			seconds: number;
	  };

export type AppReducer = Reducer<AppReducerState, AppReducerAction>;

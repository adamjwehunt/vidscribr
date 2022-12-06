import { Reducer } from 'react';
export interface PlayerReducerState {
	isPlaying: boolean;
	isSeeking: boolean;
	isBuffering: boolean;
	played: number;
	duration: number;
}

export type PlayerReducerAction =
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
			type: 'seek';
	  }
	| {
			type: 'seekEnd';
	  }
	| {
			type: 'buffer';
	  }
	| {
			type: 'bufferEnd';
	  }
	| {
			type: 'played';
			seconds: number;
	  }
	| {
			type: 'duration';
			seconds: number;
	  };

export type PlayerReducer = Reducer<PlayerReducerState, PlayerReducerAction>;

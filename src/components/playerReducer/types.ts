import { Reducer } from 'react';
export interface PlayerReducerState {
	isPlaying: boolean;
	isSeeking: boolean;
	hasSeeked: boolean;
	isBuffering: boolean;
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
			type: 'seekComplete';
	  }
	| {
			type: 'buffer';
	  }
	| {
			type: 'bufferEnd';
	  }
	| {
			type: 'duration';
			seconds: number;
	  };

export type PlayerReducer = Reducer<PlayerReducerState, PlayerReducerAction>;

import { Reducer } from 'react';

export interface AppReducerState {
	url: string;
}

export type AppReducerAction =
	| {
			type: 'url';
			url: string;
	  };

export type AppReducer = Reducer<AppReducerState, AppReducerAction>;

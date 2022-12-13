import { Reducer } from 'react';

export interface PlayerProgressReducerState {
	played: number;
}

export type PlayerProgressReducerAction = {
	type: 'played';
	seconds: number;
};

export type PlayerProgressReducer = Reducer<
	PlayerProgressReducerState,
	PlayerProgressReducerAction
>;

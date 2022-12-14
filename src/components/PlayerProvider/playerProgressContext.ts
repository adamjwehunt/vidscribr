import { createContext, Dispatch, useContext } from 'react';
import {
	PlayerProgressReducerState,
	PlayerProgressReducerAction,
} from '../playerProgressReducer/types';

export const PlayerProgressContext =
	createContext<PlayerProgressReducerState | null>(null);
export const PlayerProgressDispatchContext =
	createContext<Dispatch<PlayerProgressReducerAction> | null>(null);

export const usePlayerProgress = () => {
	const playerProgress = useContext(PlayerProgressContext);

	if (playerProgress === null) {
		throw Error('PlayerProgressContext has not been provided.');
	}

	return playerProgress;
};

export const usePlayerProgressDispatch = () => {
	const playerProgressDispatch = useContext(PlayerProgressDispatchContext);

	if (playerProgressDispatch == null) {
		throw Error('PlayerProgressDispatchContext has not been provided.');
	}

	return playerProgressDispatch;
};

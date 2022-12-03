import { Dispatch, useContext } from 'react';
import { PlayerContext, PlayerDispatchContext } from '.';
import {
	PlayerReducerAction,
	PlayerReducerState,
} from '../playerReducer/types';

export default function usePlayerContext(): {
	playerState: PlayerReducerState;
	playerDispatch: Dispatch<PlayerReducerAction>;
} {
	const playerState = useContext(PlayerContext);
	if (playerState === null) {
		throw new Error('playerState cannot be null');
	}
	const playerDispatch = useContext(PlayerDispatchContext);
	if (playerDispatch === null) {
		throw new Error('playerDispatch cannot be null');
	}

	return { playerState, playerDispatch };
}

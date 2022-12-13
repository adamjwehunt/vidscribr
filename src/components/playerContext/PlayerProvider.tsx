import React, { MutableRefObject, ReactNode, useReducer, useRef } from 'react';
import ReactPlayer from 'react-player';
import {
	PlayerStateDispatchContext,
	PlayerRefContext,
	PlayerStateContext,
} from '.';
import { PlayerProgressContext, PlayerProgressDispatchContext } from '../playerProgressContext';
import {
	DEFAULT_PLAYER_PROGRESS_REDUCER_STATE,
	playerProgressReducer,
} from '../playerProgressReducer';
import {
	PlayerProgressReducerState,
	PlayerProgressReducerAction,
} from '../playerProgressReducer/types';
import { playerReducer, DEFAULT_PLAYER_REDUCER_STATE } from '../playerReducer';
import {
	PlayerReducerState,
	PlayerReducerAction,
} from '../playerReducer/types';

interface PlayerProviderProps {
	children: (playerRef: MutableRefObject<ReactPlayer | null>) => ReactNode;
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
	const [playerState, playerStateDispatch] = useReducer(
		(previousState: PlayerReducerState, action: PlayerReducerAction) =>
			playerReducer(previousState, action),
		DEFAULT_PLAYER_REDUCER_STATE
	);

	const [playerProgress, playerProgressDispatch] = useReducer(
		(
			previousState: PlayerProgressReducerState,
			action: PlayerProgressReducerAction
		) => playerProgressReducer(previousState, action),
		DEFAULT_PLAYER_PROGRESS_REDUCER_STATE
	);

	const playerRef = useRef<ReactPlayer | null>(null);

	return (
		<PlayerStateContext.Provider value={playerState}>
			<PlayerStateDispatchContext.Provider value={playerStateDispatch}>
				<PlayerProgressContext.Provider value={playerProgress}>
					<PlayerProgressDispatchContext.Provider
						value={playerProgressDispatch}
					>
						<PlayerRefContext.Provider value={playerRef}>
							{children(playerRef)}
						</PlayerRefContext.Provider>
					</PlayerProgressDispatchContext.Provider>
				</PlayerProgressContext.Provider>
			</PlayerStateDispatchContext.Provider>
		</PlayerStateContext.Provider>
	);
};

import React, { useReducer, useRef } from 'react';
import ReactPlayer from 'react-player';
import { PlayerContext, PlayerDispatchContext } from './playerContext';
import { playerReducer, DEFAULT_PLAYER_REDUCER_STATE } from './playerReducer';
import { PlayerReducerAction, PlayerReducerState } from './playerReducer/types';
import { Player } from './Player';
import { PlayerTools } from './PlayerTools';

interface PlayerPanelProps {
	url: string;
}

export const PlayerPanel = ({ url }: PlayerPanelProps) => {
	const [playerState, dispatch] = useReducer(
		(previousState: PlayerReducerState, action: PlayerReducerAction) =>
			playerReducer(previousState, action),
		DEFAULT_PLAYER_REDUCER_STATE
	);

	const playerRef = useRef<ReactPlayer | null>(null);

	return (
		<PlayerContext.Provider value={playerState}>
			<PlayerDispatchContext.Provider value={dispatch}>
				<Player url={url} playerRef={playerRef} />
				<PlayerTools url={url} playerRef={playerRef} />
			</PlayerDispatchContext.Provider>
		</PlayerContext.Provider>
	);
};

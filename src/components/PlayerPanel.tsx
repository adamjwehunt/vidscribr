import React, { useReducer, useRef } from 'react';
import ReactPlayer from 'react-player';
import useVideoInfo from '../hooks/useVideoInfo';
import { PlayerContext, PlayerDispatchContext } from './playerContext';
import { playerReducer, DEFAULT_PLAYER_REDUCER_STATE } from './playerReducer';
import { PlayerReducerAction, PlayerReducerState } from './playerReducer/types';
import { PlayerRefContext } from './playerRefContext';
import { Player } from './Player';
import Transcript from './Transcript';
import { VideoTray } from './VideoTray';

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
	const videoInfo = useVideoInfo(url);

	return (
		<PlayerContext.Provider value={playerState}>
			<PlayerDispatchContext.Provider value={dispatch}>
				<Player url={url} playerRef={playerRef} />
				<PlayerRefContext.Provider value={playerRef}>
					<VideoTray videoDetails={videoInfo?.videoDetails} />
					<Transcript videoInfo={videoInfo} />
				</PlayerRefContext.Provider>
			</PlayerDispatchContext.Provider>
		</PlayerContext.Provider>
	);
};

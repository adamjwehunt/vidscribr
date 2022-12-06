import React, { RefObject } from 'react';
import ReactPlayer from 'react-player';
import usePlayerInfo from '../hooks/usePlayerInfo';
import { PlayerRefContext } from './playerRefContext';
import Transcript from './Transcript';
import { PlayerTray } from './PlayerTray';

interface PlayerToolsProps {
	url: string;
	playerRef: RefObject<ReactPlayer>;
}

export const PlayerTools = ({ url, playerRef }: PlayerToolsProps) => {
	const playerInfo = usePlayerInfo(url);

	return (
		<PlayerRefContext.Provider value={playerRef}>
			<PlayerTray videoDetails={playerInfo?.videoDetails} />
			<Transcript playerInfo={playerInfo} />
		</PlayerRefContext.Provider>
	);
};

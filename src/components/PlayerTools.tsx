import React, { RefObject } from 'react';
import ReactPlayer from 'react-player';
import usePlayerInfo from '../hooks/usePlayerInfo';
import Transcript from './Transcript';
import { PlayerTray } from './PlayerTray';

interface PlayerToolsProps {
	url: string;
	playerRef: RefObject<ReactPlayer>;
}

export const PlayerTools = ({ url }: PlayerToolsProps) => {
	const playerInfo = usePlayerInfo(url);

	return (
		<>
			<PlayerTray videoDetails={playerInfo?.videoDetails} />
			<Transcript playerInfo={playerInfo} />
		</>
	);
};

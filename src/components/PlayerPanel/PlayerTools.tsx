import React, { RefObject } from 'react';
import ReactPlayer from 'react-player';
import usePlayerInfo from '../../hooks/usePlayerInfo';
import { useAppState } from '../AppProvider/appContext';
import Transcript from '../Transcript';
import { PlayerTray } from './PlayerTray';

export const PlayerTools = () => {
	const playerInfo = usePlayerInfo();

	return (
		<>
			<PlayerTray videoDetails={playerInfo?.videoDetails} />
			<Transcript playerInfo={playerInfo} />
		</>
	);
};

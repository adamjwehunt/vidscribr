import React from 'react';
import usePlayerInfo from '../../hooks/usePlayerInfo';
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

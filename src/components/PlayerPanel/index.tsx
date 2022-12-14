import React from 'react';
import PlayerProvider from '../PlayerProvider';
import { Player } from './Player';
import { PlayerTools } from './PlayerTools';

export default function PlayerPanel() {
	return (
		<PlayerProvider>
			{(playerRef) => (
				<>
					<Player ref={playerRef} />
					<PlayerTools />
				</>
			)}
		</PlayerProvider>
	);
}

import React from 'react';
import PlayerProvider from '../PlayerProvider';
import { Player } from './Player';
import { PlayerTools } from './PlayerTools';

interface PlayerPanelProps {
	url: string;
}

export default function PlayerPanel({ url }: PlayerPanelProps) {
	return (
		<PlayerProvider>
			{(playerRef) => (
				<>
					<Player url={url} ref={playerRef} />
					<PlayerTools url={url} playerRef={playerRef} />
				</>
			)}
		</PlayerProvider>
	);
}

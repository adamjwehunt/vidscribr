import React from 'react';
import { Player } from './Player';
import { PlayerProvider } from './playerContext/PlayerProvider';
import { PlayerTools } from './PlayerTools';

interface PlayerPanelProps {
	url: string;
}

export const PlayerPanel = ({ url }: PlayerPanelProps) => {
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
};

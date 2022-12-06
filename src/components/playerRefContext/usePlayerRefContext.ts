import { MutableRefObject, useContext } from 'react';
import ReactPlayer from 'react-player';
import { PlayerRefContext } from '.';

export default function usePlayerRefContext(): MutableRefObject<ReactPlayer> {
	const playerRef = useContext(PlayerRefContext);
	if (playerRef === null) {
		throw new Error('playerRef cannot be null');
	}

	return playerRef;
}

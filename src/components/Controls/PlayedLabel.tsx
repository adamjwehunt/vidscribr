import React from 'react';
import usePlayerContext from '../playerContext';
import { ScrubberLabel } from './ScrubberLabel';
import { formatDuration } from './util';

export const PlayedLabel = () => {
	const {
		playerState: { played },
	} = usePlayerContext();

	return <ScrubberLabel text={formatDuration(played)} />;
};

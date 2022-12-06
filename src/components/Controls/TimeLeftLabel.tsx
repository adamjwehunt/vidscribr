import React from 'react';
import usePlayerContext from '../playerContext';
import { ScrubberLabel } from './ScrubberLabel';
import { formatDuration } from './util';

export const TimeLeftLabel = () => {
	const {
		playerState: { played, duration },
	} = usePlayerContext();

	return (
		<ScrubberLabel
			text={`${duration === played ? '' : '-'}${formatDuration(
				duration - played
			)}`}
		/>
	);
};

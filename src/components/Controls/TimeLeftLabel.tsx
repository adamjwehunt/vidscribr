import React from 'react';
import { usePlayerState } from '../PlayerProvider/playerContext';
import { usePlayerProgress } from '../PlayerProvider/playerProgressContext';
import { ScrubberLabel } from './ScrubberLabel';
import { formatDuration } from './util';

export const TimeLeftLabel = () => {
	const { duration } = usePlayerState();
	const { played } = usePlayerProgress();

	return (
		<ScrubberLabel
			text={`${duration === played ? '' : '-'}${formatDuration(
				duration - played
			)}`}
		/>
	);
};

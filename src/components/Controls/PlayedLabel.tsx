import React from 'react';
import { usePlayerProgress } from '../playerProgressContext';
import { ScrubberLabel } from './ScrubberLabel';
import { formatDuration } from './util';

export const PlayedLabel = () => {
	const { played } = usePlayerProgress();

	return <ScrubberLabel text={formatDuration(played)} />;
};

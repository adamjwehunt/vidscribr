import React from 'react';
import { useAppState } from '../appContext';

interface ThumbnailProps {
	thumbnailUrl?: string;
}

export const Thumbnail = ({ thumbnailUrl }: ThumbnailProps) => {
	if (!thumbnailUrl) {
		return null;
	}

	const {
		viewport: { isMobile },
	} = useAppState();

	return isMobile ? null : <img src={thumbnailUrl} />;
};

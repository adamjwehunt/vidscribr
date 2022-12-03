import React from 'react';
import useAppContext from '../appContext';

interface ThumbnailProps {
	thumbnailUrl?: string;
}

export const Thumbnail = ({ thumbnailUrl }: ThumbnailProps) => {
	if (!thumbnailUrl) {
		return null;
	}

	const {
		viewport: { isMobile },
	} = useAppContext();

	return isMobile ? null : <img src={thumbnailUrl} />;
};

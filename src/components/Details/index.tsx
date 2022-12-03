import React from 'react';
import styled from '@emotion/styled';
import useAppContext from '../appContext';
import { Thumbnail } from './Thumbnail';
import { DetailsText } from './DetailsText';
import { css } from '@emotion/react';

interface DetailsProps {
	className?: string;
	videoDetails: any | null;
}

export const Details = styled(({ className, videoDetails }: DetailsProps) => {
	if (!videoDetails) {
		return null;
	}

	const {
		thumbnailUrl,
		title,
		artist,
	}: { thumbnailUrl?: string; title?: string; artist?: string } = videoDetails;

	return (
		<div className={className}>
			<Thumbnail thumbnailUrl={thumbnailUrl} />
			<DetailsText title={title} artist={artist} />
		</div>
	);
})(() => {
	const {
		viewport: { isMobile },
	} = useAppContext();

	return css`
		display: flex;
		width: 30%;

		${isMobile &&
		css`
			width: 100%;
		`};
	`;
});

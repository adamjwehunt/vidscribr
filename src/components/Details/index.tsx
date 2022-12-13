import React from 'react';
import styled from '@emotion/styled';
import { Thumbnail } from './Thumbnail';
import { DetailsText } from './DetailsText';
import { css } from '@emotion/react';
import { StyledComponent } from '../../types';
import { useAppState } from '../appContext';

interface DetailsProps extends StyledComponent {
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
	} = useAppState();

	return css`
		display: flex;
		width: 30%;

		${isMobile &&
		css`
			width: 100%;
		`};
	`;
});

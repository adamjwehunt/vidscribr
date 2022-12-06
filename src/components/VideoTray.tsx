import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import useAppContext from './appContext';
import { Controls } from './Controls';
import { Details } from './Details';
import { SecondaryControls } from './SecondaryControls';

interface VideoTrayProps {
	videoDetails: any;
	className?: string;
}

export const VideoTray = styled(
	({ videoDetails, className }: VideoTrayProps) => (
		<div className={className}>
			<Details videoDetails={videoDetails} />
			<Controls />
			<SecondaryControls />
		</div>
	)
)(() => {
	const {
		viewport: { isMobile },
	} = useAppContext();

	return css`
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		padding: 0 1.5em;
		flex-direction: row;
		justify-content: space-between;
		align-items: end;
		background-color: #181818;

		${isMobile &&
		css`
			bottom: 6dvh;
			height: 23dvh;
			flex-direction: column;
			background-color: transparent;
		`};
	`;
});

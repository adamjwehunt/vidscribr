import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledComponent } from '../../types';
import { useAppState } from '../AppProvider/appContext';
import { Controls } from '../Controls';
import { Details } from '../Details';
import { SecondaryControls } from '../SecondaryControls';

interface PlayerTrayProps extends StyledComponent {
	videoDetails: any;
}

export const PlayerTray = styled(
	({ videoDetails, className }: PlayerTrayProps) => (
		<div className={className}>
			<Details videoDetails={videoDetails} />
			<Controls />
			<SecondaryControls />
		</div>
	)
)(() => {
	const {
		viewport: { isMobile },
	} = useAppState();

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

import React from 'react';
import styled from '@emotion/styled';
import { MenuButton } from './MenuButton';
import { DownloadButton } from './DownloadButton';
import { css } from '@emotion/react';
import { StyledComponent } from '../../types';
import { useAppState } from '../AppProvider/appContext';

export const SecondaryControls = styled(
	({ className }: StyledComponent) => (
		<div className={className}>
			<DownloadButton />
			<MenuButton />
		</div>
	)
)(() => {
	const {
		viewport: { isMobile },
	} = useAppState();

	return css`
		width: 30%;
		justify-content: space-between;
		display: flex;
		margin-top: -0.5em;

		${isMobile &&
		css`
			width: 100%;
		`};
	`;
});

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { StyledComponent } from '../../types';
import { useAppState } from '../AppProvider/appContext';
import { PlayPauseButton } from './PlayPauseButton';
import { SkipButton } from './SkipButton';

export const ControlsButtons = styled(({ className }: StyledComponent) => (
	<div className={className}>
		<SkipButton back />
		<PlayPauseButton />
		<SkipButton />
	</div>
))(() => {
	const {
		viewport: { isMobile },
	} = useAppState();

	return css`
		display: flex;
		gap: 16px;

		${isMobile &&
		css`
			gap: 32px;
		`};
	`;
});

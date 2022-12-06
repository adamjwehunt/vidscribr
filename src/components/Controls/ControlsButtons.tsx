import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import useAppContext from '../appContext';
import { PlayPauseButton } from './PlayPauseButton';
import { SkipButton } from './SkipButton';

interface ControlsButtonsProps {
	className?: string;
}

export const ControlsButtons = styled(({ className }: ControlsButtonsProps) => (
	<div className={className}>
		<SkipButton back />
		<PlayPauseButton />
		<SkipButton />
	</div>
))(() => {
	const {
		viewport: { isMobile },
	} = useAppContext();

	return css`
		display: flex;
		gap: 16px;

		${isMobile &&
		css`
			gap: 32px;
		`};
	`;
});

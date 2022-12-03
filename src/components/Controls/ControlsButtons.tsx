import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import ReactPlayer from 'react-player';
import useAppContext from '../appContext';
import { PlayPauseButton } from './PlayPauseButton';
import { SkipButton } from './SkipButton';

interface ControlsButtonsProps {
	className?: string;
	reactPlayerRef: React.RefObject<ReactPlayer>;
}

export const ControlsButtons = styled(
	({ className, reactPlayerRef }: ControlsButtonsProps) => (
		<div className={className}>
			<SkipButton back reactPlayerRef={reactPlayerRef} />
			<PlayPauseButton />
			<SkipButton reactPlayerRef={reactPlayerRef} />
		</div>
	)
)(() => {
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

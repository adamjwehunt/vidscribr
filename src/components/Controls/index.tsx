import React, { Dispatch, ReactElement, RefObject } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SkipButton } from './SkipButton';
import { PlayPauseButton } from './PlayPauseButton';
import { clamp } from './util';
import Scrubber from './Scrubber';
import { AppReducerAction } from '../appReducer/types';

const ControlsContainer = styled.div<{ isMobile: boolean }>`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${({ isMobile }) =>
		isMobile &&
		css`
			flex-direction: column-reverse;
		`};
`;

const ButtonsContainer = styled.div<{ isMobile: boolean }>`
	display: flex;
	gap: 16px;

	${({ isMobile }) =>
		isMobile &&
		css`
			gap: 32px;
		`};
`;

interface ControlsProps {
	reactPlayerRef: RefObject<ReactPlayer>;
	dispatch: Dispatch<AppReducerAction>;
	isPlaying: boolean;
	isBuffering: boolean;
	progress: number;
	duration: number;
	isMobile: boolean;
}

export default function Controls({
	reactPlayerRef,
	dispatch,
	isPlaying,
	isBuffering,
	progress,
	duration,
	isMobile,
}: ControlsProps): ReactElement {
	const handleSkip = (seconds: number) => {
		const progress = reactPlayerRef.current?.getCurrentTime() ?? 0;
		const newProgress = clamp(progress + seconds, 0, duration);

		if (newProgress === progress) {
			return;
		}

		handleSeek(newProgress);
	};

	const handleScrub = (seconds: number) => {
		dispatch({ type: 'progress', seconds });
		// handleSeek(seconds);
	};

	const handleScrubCommitted = (seconds: number) => {
		// dispatch({ type: 'progress', seconds });
		handleSeek(seconds);
	};

	const handleSeek = (seconds: number) =>
		reactPlayerRef.current?.seekTo(seconds);

	return (
		<ControlsContainer isMobile={isMobile}>
			<ButtonsContainer isMobile={isMobile}>
				<SkipButton back isMobile={isMobile} onSkip={handleSkip} />
				<PlayPauseButton
					isPlaying={isPlaying}
					isBuffering={isBuffering}
					onTogglePlay={() => dispatch({ type: isPlaying ? 'pause' : 'play' })}
				/>
				<SkipButton isMobile={isMobile} onSkip={handleSkip} />
			</ButtonsContainer>
			<Scrubber
				progress={progress}
				duration={duration}
				onScrub={handleScrub}
				onScrubCommitted={handleScrubCommitted}
			/>
		</ControlsContainer>
	);
}

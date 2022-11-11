import React, { Dispatch, ReactElement, RefObject, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { styled } from '@mui/material/styles';
import { Flex } from '../Flex';
import { SkipButton } from './SkipButton';
import { PlayPauseButton } from './PlayPauseButton';
import { clamp } from './util';
import Scrubber from './Scrubber';
import useViewport from '../../hooks/useViewport';

interface ControlsProps {
	reactPlayerRef: RefObject<ReactPlayer>;
	dispatch: Dispatch<any>;
	isPlaying: boolean;
	progress: number;
	duration: number;
}

const Wrapper = styled(Flex)<{ isMobile: boolean }>`
	flex-direction: ${({ isMobile }) => (isMobile ? 'column-reverse' : 'column')};
	justify-content: center;
	align-items: center;
	width: ${({ isMobile }) => (isMobile ? '100%' : '40%')};
`;

const ButtonWrapper = styled(Flex)<{ isMobile: boolean }>`
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: ${({ isMobile }) => (isMobile ? '32px' : '16px')};
`;

export default function Controls({
	reactPlayerRef,
	dispatch,
	isPlaying,
	progress,
	duration,
}: ControlsProps): ReactElement {
	const { isMobile } = useViewport();

	const handleSkip = (seconds: number) => {
		const progress = reactPlayerRef.current?.getCurrentTime() ?? 0;
		const newProgress = clamp(progress + seconds, 0, duration);

		if (newProgress === progress) {
			return;
		}

		handleSeek(newProgress);
	};

	const handleScrub = (seconds: number) => {
		console.log(
			`src/components/Controls/index.tsx - 54 => seconds: `,
			'\n',
			seconds
		);
		dispatch({ type: 'progress', seconds });
		// handleSeek(seconds);
	};

	const handleScrubCommitted = (seconds: number) => {
		console.log(
			`src/components/Controls/index.tsx - 60 => seconds: `,
			'\n',
			seconds
		);

		// dispatch({ type: 'progress', seconds });
		handleSeek(seconds);
	};

	const handleSeek = (seconds: number) =>
		reactPlayerRef.current?.seekTo(seconds);

	return (
		<Wrapper isMobile={isMobile}>
			<ButtonWrapper isMobile={isMobile}>
				<SkipButton back onSkip={handleSkip} />
				<PlayPauseButton
					isPlaying={isPlaying}
					onTogglePlay={() => dispatch({ type: isPlaying ? 'pause' : 'play' })}
				/>
				<SkipButton onSkip={handleSkip} />
			</ButtonWrapper>
			<Scrubber
				progress={progress}
				duration={duration}
				onScrub={handleScrub}
				onScrubCommitted={handleScrubCommitted}
			/>
		</Wrapper>
	);
}

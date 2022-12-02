import React, { Dispatch, RefObject } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Controls from '../Controls';
import ReactPlayer from 'react-player';
import { AppReducerAction } from '../appReducer/types';

const TranscriptControlsWrapper = styled(motion.div)`
	position: fixed;
	padding: 0px 1.5em 4em;
	z-index: 3;
	background-color: rgb(185, 153, 190);
	left: 0;
	right: 0;
	top: 100dvh;
`;

interface TranscriptControlsProps {
	reactPlayerRef: RefObject<ReactPlayer>;
	dispatch: Dispatch<AppReducerAction>;
	isPlaying: boolean;
	isBuffering: boolean;
	progress: number;
	duration: number;
	isMobile: boolean;
}

export default function TranscriptControls({
	reactPlayerRef,
	dispatch,
	isPlaying,
	isBuffering,
	progress,
	duration,
	isMobile,
}: TranscriptControlsProps) {
	return (
		<TranscriptControlsWrapper
			initial={{ y: 0, opacity: 0 }}
			animate={{ y: '-18dvh', opacity: 1 }}
			exit={{ y: 0, opacity: 0 }}
		>
			<Controls
				reactPlayerRef={reactPlayerRef}
				dispatch={dispatch}
				isPlaying={isPlaying}
				isBuffering={isBuffering}
				progress={progress}
				duration={duration}
				isMobile={isMobile}
			/>
		</TranscriptControlsWrapper>
	);
}

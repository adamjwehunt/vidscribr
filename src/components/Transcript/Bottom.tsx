import React, { RefObject } from 'react';
import { motion } from 'framer-motion';
import Captions from './Captions';
import TranscriptHeader from './TranscriptHeader';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import useActiveCaptionId from './hooks/useActiveCaptionId';
import { ICaption } from '../../types';

const BottomContainer = styled(motion.div)`
	position: absolute;
	z-index: 2;
	background: rgb(185, 153, 190);
	border-radius: 0.3em;
	display: flex;
	flex-direction: column;
	top: calc(100dvh - 2.3em);
	bottom: -300px;
	left: 4.5dvw;
	right: 4.5dvw;
	padding-top: 3em;
	padding-bottom: 0;
`;

interface BottomProps {
	isExpanded: boolean;
	isMobile: boolean;
	captions: ICaption[];
	progress: number;
	reactPlayerRef: RefObject<ReactPlayer>;
	onToggleExpand: () => void;
}

export default function Bottom({
	isExpanded,
	isMobile,
	captions,
	progress,
	reactPlayerRef,
	onToggleExpand,
}: BottomProps) {
	const { activeCaptionId, setIsAnimating } = useActiveCaptionId(
		captions,
		progress
	);

	return (
		<BottomContainer
			onAnimationStart={() => setIsAnimating(true)}
			onAnimationComplete={() => setIsAnimating(false)}
			animate={{
				...(isExpanded && {
					top: '8dvh',
					bottom: 0,
					left: 0,
					right: 0,
					paddingTop: 0,
					paddingBottom: '21dvh',
				}),
			}}
		>
			<TranscriptHeader isMobile={isMobile} onToggleExpand={onToggleExpand} />
			<Captions
				reactPlayerRef={reactPlayerRef}
				activeCaptionId={activeCaptionId}
				captions={captions}
			/>
		</BottomContainer>
	);
}

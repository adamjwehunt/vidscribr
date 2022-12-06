import React, { RefObject } from 'react';
import { motion } from 'framer-motion';
import { Captions } from './Captions';
import { TranscriptHeader } from './TranscriptHeader';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import useActiveCaptionId from './hooks/useActiveCaptionId';
import { Caption } from '../../types';
import usePlayerContext from '../playerContext';
import { css } from '@emotion/react';

interface BottomProps {
	className?: string;
	playerRef: RefObject<ReactPlayer>;
	captions: Caption[];
	isExpanded: boolean;
	onToggleExpand: () => void;
}

export const Bottom = styled(
	({
		className,
		captions,
		playerRef,
		isExpanded,
		onToggleExpand,
	}: BottomProps) => {
		const {
			playerState: { played },
		} = usePlayerContext();
		const { activeCaptionId, handleAnimationStart, handleAnimationComplete } =
			useActiveCaptionId(captions, played);

		return (
			<motion.div
				className={className}
				onAnimationStart={handleAnimationStart}
				onAnimationComplete={handleAnimationComplete}
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
				<TranscriptHeader onToggleExpand={onToggleExpand} />
				<Captions
					playerRef={playerRef}
					activeCaptionId={activeCaptionId}
					captions={captions}
				/>
			</motion.div>
		);
	}
)(css`
	position: absolute;
	top: calc(100dvh - 2.3em);
	bottom: -300px;
	left: 4.5dvw;
	right: 4.5dvw;
	z-index: 2;
	display: flex;
	background: rgb(185, 153, 190);
	flex-direction: column;
	padding-top: 3em;
	padding-bottom: 0;
	border-radius: 0.3em;
`);

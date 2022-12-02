import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { MinimizeButton } from './MinimizeButton';
import { SearchTranscriptButton } from './SearchTranscriptButton';

const TopContainer = styled(motion.div)`
	position: absolute;
	left: 0;
	right: 0;
	z-index: 3;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 1em;
	background-color: rgb(185, 153, 190);
`;

const Info = styled.div`
	padding: 0 1em;
	overflow: hidden;
	text-align: center;
	white-space: nowrap;
	line-height: 1.45em;
	letter-spacing: 0.03em;

	> div {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	div:first-of-type {
		font-weight: 600;
	}
`;

interface TopProps {
	title: string;
	artist: string;
	onToggleExpand: () => void;
}

export default function Top({ title, artist, onToggleExpand }: TopProps) {
	return (
		<TopContainer
			initial={{ y: '-5em', opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: '-5em', opacity: 0 }}
		>
			<SearchTranscriptButton onClick={() => {}} />
			<Info>
				<div>{title}</div>
				<div>{artist}</div>
			</Info>
			<MinimizeButton onClick={onToggleExpand} />
		</TopContainer>
	);
}

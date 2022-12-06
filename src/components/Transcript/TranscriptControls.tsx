import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Controls } from '../Controls';
import { css } from '@emotion/react';

interface TranscriptControlsProps {
	isExpanded: boolean;
	className?: string;
}

export const TranscriptControls = styled(
	({ isExpanded, className }: TranscriptControlsProps) => {
		if (!isExpanded) {
			return null;
		}

		return (
			<AnimatePresence>
				<motion.div
					className={className}
					initial={{ y: 0, opacity: 0 }}
					animate={{ y: '-18dvh', opacity: 1 }}
					exit={{ y: 0, opacity: 0 }}
				>
					<Controls />
				</motion.div>
			</AnimatePresence>
		);
	}
)(css`
	position: fixed;
	left: 0;
	right: 0;
	top: 100dvh;
	z-index: 3;
	padding: 0px 1.5em 4em;
	background-color: rgb(185, 153, 190);
`);

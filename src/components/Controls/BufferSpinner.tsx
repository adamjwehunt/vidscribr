import React from 'react';
import styled from '@emotion/styled';
import { usePlayerState } from '../playerContext';
import { DelayRender } from '../DelayRender';
import { AnimatePresence, motion } from 'framer-motion';
import { css } from '@emotion/react';
import { StyledComponent } from '../../types';

export const BufferSpinner = styled(({ className }: StyledComponent) => {
	const { isBuffering } = usePlayerState();

	if (!isBuffering) {
		return null;
	}

	return (
		<AnimatePresence>
			<DelayRender seconds={0.25}>
				<motion.div
					className={className}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, rotate: 360 }}
					exit={{ opacity: 0 }}
					transition={{
						rotate: { duration: 0.65, repeat: Infinity, delay: 0.3 },
						opacity: { duration: 0.35, delay: 0.3 },
					}}
				/>
			</DelayRender>
		</AnimatePresence>
	);
})(() => {
	const pseudoElementBase = css`
		content: '';
		position: absolute;
		top: -3px;
		right: -3px;
		bottom: -3px;
		left: -3px;
		border-radius: 100%;
	`;

	return css`
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		&:before {
			${pseudoElementBase};
			opacity: 0.3;
			background: #fff;
		}

		&:after {
			${pseudoElementBase};
			border: 4px solid transparent;
			border-top-color: #fff;
		}
	`;
});

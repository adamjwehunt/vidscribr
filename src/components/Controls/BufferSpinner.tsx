import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { DelayRender } from '../DelayRender';

const Spinner = styled(motion.div)`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	&:before {
		content: '';
		position: absolute;
		top: -3px;
		right: -3px;
		bottom: -3px;
		left: -3px;
		background: #fff;
		border-radius: 100%;
		opacity: 0.3;
	}

	&:after {
		content: '';
		position: absolute;
		top: -3px;
		right: -3px;
		bottom: -3px;
		left: -3px;
		border: 4px solid transparent;
		border-radius: 100%;
		border-top-color: #fff;
	}
`;

export default function BufferSpinner() {
	return (
		<DelayRender seconds={0.25}>
			<Spinner
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, rotate: 360 }}
				exit={{ opacity: 0 }}
				transition={{
					rotate: { duration: 0.65, repeat: Infinity, delay: 0.3 },
					opacity: { duration: 0.35, delay: 0.3 },
				}}
			/>
		</DelayRender>
	);
}

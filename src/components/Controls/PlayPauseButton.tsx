import React from 'react';
import styled from '@emotion/styled';
import { PlayCircle, PauseCircle } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import BufferSpinner from './BufferSpinner';
import { AnimatePresence } from 'framer-motion';

const PlayPauseButtonWrapper = styled.div`
	position: relative;
	pointer-events: none;
`;

export const PlayPauseButton = styled(
	({
		isPlaying,
		isBuffering,
		onTogglePlay,
	}: {
		isPlaying: boolean;
		isBuffering: boolean;
		onTogglePlay: () => void;
	}) => {
		const svgStyle = { height: '2.4em', width: '100%' };

		return (
			<PlayPauseButtonWrapper>
				<IconButton
					aria-label={isPlaying ? 'Pause' : 'Play'}
					size="medium"
					color="primary"
					component="label"
					onClick={onTogglePlay}
					disableRipple
					sx={{
						pointerEvents: 'auto',
						padding: 0,
						'& path': {
							transform: 'scale(1.2, 1.2)',
							transformOrigin: 'center',
						},
						'&:active path': {
							transform: 'scale(1.1, 1.1)',
						},
					}}
				>
					{isPlaying ? (
						<PauseCircle style={svgStyle} />
					) : (
						<PlayCircle style={svgStyle} />
					)}
				</IconButton>
				<AnimatePresence>{isBuffering && <BufferSpinner />}</AnimatePresence>
			</PlayPauseButtonWrapper>
		);
	}
)``;

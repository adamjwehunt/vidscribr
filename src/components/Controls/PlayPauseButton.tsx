import React from 'react';
import styled from '@emotion/styled';
import { usePlayerStateDispatch, usePlayerState } from '../playerContext';
import { PlayCircle, PauseCircle } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { BufferSpinner } from './BufferSpinner';
import { css } from '@emotion/react';
import { PlayPauseIcon } from './PlayPauseIcon';
import { StyledComponent } from '../../types';

export const PlayPauseButton = styled(({ className }: StyledComponent) => {
	const { isPlaying } = usePlayerState();
	const playerStateDispatch = usePlayerStateDispatch();

	return (
		<div className={className}>
			<IconButton
				aria-label={isPlaying ? 'Pause' : 'Play'}
				size="medium"
				color="primary"
				component="label"
				onClick={() => playerStateDispatch({ type: isPlaying ? 'pause' : 'play' })}
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
				<PlayPauseIcon icon={isPlaying ? PauseCircle : PlayCircle} />
			</IconButton>
			<BufferSpinner />
		</div>
	);
})(css`
	position: relative;
	pointer-events: none;
`);

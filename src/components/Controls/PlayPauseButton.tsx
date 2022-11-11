import React from 'react';
import { styled } from '@mui/material/styles';
import { PlayCircle, PauseCircle } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import useViewport from '../../hooks/useViewport';

export const PlayPauseButton = styled(
	({
		isPlaying,
		onTogglePlay,
	}: {
		isPlaying: boolean;
		onTogglePlay: () => void;
	}) => {
		const { isMobile } = useViewport();
		const svgStyle = { height: isMobile ? '64px' : '32px', width: '100%' };

		return (
			<IconButton
				aria-label={isPlaying ? 'Pause' : 'Play'}
				size="medium"
				color="primary"
				component="label"
				onClick={onTogglePlay}
				disableRipple
				sx={{
					padding: 0,
					'& path': {
						transform: 'scale(1.2,1.2)',
						transformOrigin: 'center',
					},
					'&:active path': {
						transform: 'scale(1.1,1.1)',
					},
				}}
			>
				{isPlaying ? (
					<PauseCircle style={svgStyle} />
				) : (
					<PlayCircle style={svgStyle} />
				)}
			</IconButton>
		);
	}
)``;

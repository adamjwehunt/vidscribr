import React from 'react';
import styled from '@emotion/styled';
import {
	usePlayerStateDispatch,
	usePlayerRef,
	usePlayerState,
} from '../playerContext';
import { css } from '@emotion/react';
import { ScrubberLabels } from './ScrubberLabels';
import { Slider, SxProps } from '@mui/material';
import { StyledComponent } from '../../types';
import {
	usePlayerProgress,
	usePlayerProgressDispatch,
} from '../playerProgressContext';

const ScrubberContainer = styled.div`
	margin: auto;
	position: relative;
	z-index: 1;
`;

const SliderStyles: SxProps = {
	color: '#fff',
	height: 4,
	'& .MuiSlider-thumb': {
		display: 'block',
		width: 12,
		height: 12,
		transition: 'none',
		'&:before, &:hover, &.Mui-focusVisible': {
			boxShadow: 'none',
		},
	},
	'&:hover .MuiSlider-thumb': {
		display: 'block',
	},
	'& .MuiSlider-rail': {
		backgroundColor: 'hsla(0,0%,100%,.6)',
	},
	'.MuiSlider-track': {
		transition: 'none',
	},
	'&:hover .MuiSlider-track': {
		backgroundColor: '#1db954',
	},
	'&:before, .Mui-active': {
		boxShadow: 'none',
	},
};

export const Scrubber = styled(({ className }: StyledComponent) => {
	const { duration } = usePlayerState();
	const playerStateDispatch = usePlayerStateDispatch();
	const { played } = usePlayerProgress();
	const playerProgressDispatch = usePlayerProgressDispatch();
	const { seekTo } = usePlayerRef();

	const handleSeek = (seconds: number) => {
		playerStateDispatch({ type: 'seek' });
		playerProgressDispatch({ type: 'played', seconds });
	};

	const handleSeekCommitted = (seconds: number) => {
		playerStateDispatch({ type: 'seekEnd' });
		playerProgressDispatch({ type: 'played', seconds });
		seekTo(seconds);
	};

	return (
		<div className={className}>
			<ScrubberContainer>
				<Slider
					value={played}
					min={0}
					max={duration}
					step={1}
					aria-label="time-indicator"
					size="small"
					sx={SliderStyles}
					onChange={(_, value) => handleSeek(value as number)}
					onChangeCommitted={(_, value) => handleSeekCommitted(value as number)}
				/>
				<ScrubberLabels />
			</ScrubberContainer>
		</div>
	);
})(css`
	width: 100%;
	margin: 1em 0;
`);

import React from 'react';
import styled from '@emotion/styled';
import usePlayerContext from '../playerContext';
import { css } from '@emotion/react';
import ReactPlayer from 'react-player';
import 'react-scrubber/lib/scrubber.css';
import { ScrubberLabels } from './ScrubberLabels';
import { Slider, SxProps } from '@mui/material';

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

interface ScrubberProps {
	className?: string;
	playerRef: React.RefObject<ReactPlayer>;
}

export const Scrubber = styled(({ className, playerRef }: ScrubberProps) => {
	const {
		playerState: { played, duration },
		playerDispatch,
	} = usePlayerContext();

	const handleSeek = (seconds: number) => {
		playerDispatch({ type: 'seek' });
		playerDispatch({ type: 'played', seconds });
	};

	const handleSeekCommitted = (seconds: number) => {
		playerRef.current?.seekTo(seconds);
		playerDispatch({ type: 'played', seconds });
		playerDispatch({ type: 'seekEnd' });
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

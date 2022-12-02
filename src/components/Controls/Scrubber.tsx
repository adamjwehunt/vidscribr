import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Slider, Typography, Box, SxProps, Theme } from '@mui/material';
import { formatDuration } from './util';

interface ScrubberProps {
	progress: number;
	duration: number;
	onScrub: (seconds: number) => void;
	onScrubCommitted: (seconds: number) => void;
}

const TinyText = styled(Typography)({
	color: 'white',
	fontSize: '0.75em',
	opacity: 0.6,
	fontWeight: 500,
	letterSpacing: 0.2,
});

const Widget = styled.div(({ theme }) => ({
	margin: 'auto',
	position: 'relative',
	zIndex: 1,
}));

export default function Scrubber({
	progress,
	duration,
	onScrub,
	onScrubCommitted,
}: ScrubberProps) {
	return (
		<Box
			sx={
				css`
					width: 100%;
					margin: 0.5em 0;
				` as React.CSSProperties
			}
		>
			<Widget>
				<Slider
					aria-label="time-indicator"
					size="small"
					value={progress}
					min={0}
					step={1}
					max={duration}
					onChange={(_, value) => onScrub(value as number)}
					onChangeCommitted={(_, value) => onScrubCommitted(value as number)}
					sx={{
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
					}}
				/>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: '-0.8em',
					}}
				>
					<TinyText>{formatDuration(progress)}</TinyText>
					<TinyText>{`${duration === progress ? '' : '-'}${formatDuration(
						duration - progress
					)}`}</TinyText>
				</Box>
			</Widget>
		</Box>
	);
}

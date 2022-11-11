import React from 'react';
import { styled } from '@mui/material/styles';
import { Slider, Typography, Box } from '@mui/material';
import { formatDuration } from './util';
import { Flex } from '../Flex';
import useViewport from '../../hooks/useViewport';

interface ScrubberProps {
	progress: number;
	duration: number;
	onScrub: (seconds: number) => void;
	onScrubCommitted: (seconds: number) => void;
}

const Wrapper = styled(Flex)`
	width: 100%;
`;

const TinyText = styled(Typography)({
	color: 'white',
	fontSize: '0.75rem',
	opacity: 0.6,
	fontWeight: 500,
	letterSpacing: 0.2,
});

const Widget = styled('div')(({ theme }) => ({
	padding: '0 8px',
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
	const { isMobile } = useViewport();

	return (
		<Box sx={{ width: '100%', overflow: 'hidden' }}>
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
							display: isMobile ? 'block' : 'none',
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
						mt: -2,
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

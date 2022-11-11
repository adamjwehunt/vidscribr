import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SkipForwardIcon from '../../svgs/skip_forward.svg';
import SkipBackIcon from '../../svgs/skip_back.svg';
import useViewport from '../../hooks/useViewport';

const SKIP_COUNT_SECONDS = 15;

export const SkipButton = styled(
	({ onSkip, back }: { onSkip: (seconds: number) => void; back?: boolean }) => {
		const { isMobile } = useViewport();
		const svgStyle = {
			height: isMobile ? '24px' : '16px',
			width: '100%',
			fill: 'hsla(0,0%,100%,.7)',
		};

		return (
			<IconButton
				size="medium"
				aria-label={`Skip ${
					back ? 'back' : 'forward'
				} ${SKIP_COUNT_SECONDS} seconds`}
				color="primary"
				disableRipple
				sx={{
					'&:hover': {
						backgroundColor: 'transparent',
						'& svg': {
							fill: 'white!important',
						},
					},
					'&:active': {
						'& svg': {
							fill: 'hsla(0,0%,100%,.7)!important',
						},
					},
				}}
				component="label"
				onClick={() => onSkip(back ? -SKIP_COUNT_SECONDS : SKIP_COUNT_SECONDS)}
			>
				{back ? (
					<SkipBackIcon style={svgStyle} />
				) : (
					<SkipForwardIcon style={svgStyle} />
				)}
			</IconButton>
		);
	}
)`
	&:hover svg {
		fill: white;
	}
`;

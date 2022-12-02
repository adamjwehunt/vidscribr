import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import SkipForwardIcon from '../../svgs/skip_forward.svg';
import SkipBackIcon from '../../svgs/skip_back.svg';

const SKIP_COUNT_SECONDS = 15;
interface SkipButtonProps {
	onSkip: (seconds: number) => void;
	isMobile: boolean;
	back?: boolean;
}

export const SkipButton = styled(
	({ onSkip, back, isMobile }: SkipButtonProps) => {
		const svgStyle = {
			height: '1.3em',
			width: '100%',
			fill: `hsla(0,0%, 100%, ${isMobile ? '1' : '0.7'})`,
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

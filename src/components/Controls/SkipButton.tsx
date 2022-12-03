import React from 'react';
import styled from '@emotion/styled';
import usePlayerContext from '../playerContext';
import IconButton from '@mui/material/IconButton';
import { SkipIcon } from './SkipIcon';
import { clamp } from './util';
import ReactPlayer from 'react-player';
import SkipForwardIcon from '../../svgs/skip_forward.svg';
import SkipBackIcon from '../../svgs/skip_back.svg';
import { css } from '@emotion/react';

const SKIP_COUNT_SECONDS = 15;

interface SkipButtonProps {
	back?: boolean;
	reactPlayerRef: React.RefObject<ReactPlayer>;
}

export const SkipButton = styled(
	({ back, reactPlayerRef }: SkipButtonProps) => {
		const {
			playerState: { progress, duration },
		} = usePlayerContext();

		const handleSkip = () => {
			const seconds = back ? -SKIP_COUNT_SECONDS : SKIP_COUNT_SECONDS;
			const newProgress = clamp(progress + seconds, 0, duration);

			if (newProgress === progress) {
				return;
			}

			reactPlayerRef.current?.seekTo(newProgress);
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
				onClick={handleSkip}
			>
				<SkipIcon icon={back ? SkipBackIcon : SkipForwardIcon} />
			</IconButton>
		);
	}
)(css`
	&:hover svg {
		fill: white;
	}
`);

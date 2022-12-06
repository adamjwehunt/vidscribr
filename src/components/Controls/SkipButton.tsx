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
// import usePlayerRefContext from '../playerRefContext';

const SKIP_COUNT_SECONDS = 15;

interface SkipButtonProps {
	back?: boolean;
	playerRef: React.RefObject<ReactPlayer>;
}

export const SkipButton = styled(({ back, playerRef }: SkipButtonProps) => {
	const {
		playerState: { played, duration },
	} = usePlayerContext();

	const handleSkip = () => {
		const seconds = back ? -SKIP_COUNT_SECONDS : SKIP_COUNT_SECONDS;
		const newPlayed = clamp(played + seconds, 0, duration);

		if (newPlayed === played) {
			return;
		}

		playerRef.current?.seekTo(newPlayed);
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
})(css`
	&:hover svg {
		fill: white;
	}
`);

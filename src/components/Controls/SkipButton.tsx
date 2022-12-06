import React from 'react';
import styled from '@emotion/styled';
import usePlayerContext from '../playerContext';
import IconButton from '@mui/material/IconButton';
import { SkipIcon } from './SkipIcon';
import { clamp } from './util';
import SkipForwardIcon from '../../svgs/skip_forward.svg';
import SkipBackIcon from '../../svgs/skip_back.svg';
import { css } from '@emotion/react';
import usePlayerRefContext from '../playerRefContext';

const SKIP_COUNT_SECONDS = 15;

interface SkipButtonProps {
	back?: boolean;
}

export const SkipButton = styled(({ back }: SkipButtonProps) => {
	const playerRef = usePlayerRefContext();
	const {
		playerState: { played, duration },
		playerDispatch,
	} = usePlayerContext();

	const handleSkip = () => {
		const newPlayed = clamp(
			played + (back ? -SKIP_COUNT_SECONDS : SKIP_COUNT_SECONDS),
			0,
			duration
		);

		if (newPlayed === played) {
			return;
		}

		playerRef.current?.seekTo(newPlayed);
		playerDispatch({ type: 'played', seconds: newPlayed });
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

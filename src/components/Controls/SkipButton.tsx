import React from 'react';
import styled from '@emotion/styled';
import { usePlayerRef, usePlayerState } from '../playerContext';
import IconButton from '@mui/material/IconButton';
import { SkipIcon } from './SkipIcon';
import { clamp } from './util';
import SkipForwardIcon from '../../svgs/skip_forward.svg';
import SkipBackIcon from '../../svgs/skip_back.svg';
import { css } from '@emotion/react';
import {
	usePlayerProgress,
	usePlayerProgressDispatch,
} from '../playerProgressContext';

const SKIP_COUNT_SECONDS = 15;

interface SkipButtonProps {
	back?: boolean;
}

export const SkipButton = styled(({ back }: SkipButtonProps) => {
	const { duration } = usePlayerState();
	const { played } = usePlayerProgress();
	const playerProgressDispatch = usePlayerProgressDispatch();
	const { seekTo } = usePlayerRef();

	const handleSkip = () => {
		const newPlayed = clamp(
			played + (back ? -SKIP_COUNT_SECONDS : SKIP_COUNT_SECONDS),
			0,
			duration
		);

		if (newPlayed === played) {
			return;
		}

		seekTo(newPlayed);
		playerProgressDispatch({ type: 'played', seconds: newPlayed });
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

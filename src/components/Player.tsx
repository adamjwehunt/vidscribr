import React, { ForwardedRef, forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ReactPlayer, { Config } from 'react-player';
import { OnProgressProps } from 'react-player/base';
import { StyledComponent } from '../types';
import { usePlayerStateDispatch, usePlayerState } from './playerContext';
import { usePlayerProgressDispatch } from './playerProgressContext';
import { useAppState } from './appContext';

const reactPlayerConfig: Config = {
	youtube: {
		playerVars: {
			wmode: 'opaque',
		},
	},
};

interface PlayerProps extends StyledComponent {
	url: string;
}

export const Player = styled(
	forwardRef(
		({ className, url }: PlayerProps, ref: ForwardedRef<ReactPlayer>) => {
			const { isPlaying, isSeeking, hasSeeked } = usePlayerState();
			const playerStateDispatch = usePlayerStateDispatch();
			const playerProgressDispatch = usePlayerProgressDispatch();

			const dispatchPlayed = (seconds: number) => {
				if (isSeeking) {
					return;
				}

				// Ignores React Player from sometimes returning a previous progress value after seek
				if (hasSeeked) {
					playerStateDispatch({ type: 'seekComplete' });
					return;
				}

				playerProgressDispatch({
					type: 'played',
					seconds,
				});
			};
			const handleDuration = (seconds: number) =>
				playerStateDispatch({
					type: 'duration',
					seconds,
				});
			const handleSeek = (seconds: number) => dispatchPlayed(seconds);
			const handleProgress = ({ playedSeconds }: OnProgressProps) =>
				dispatchPlayed(playedSeconds);
			const handlePlay = () => playerStateDispatch({ type: 'play' });
			const handlePause = () => playerStateDispatch({ type: 'pause' });
			const handleBuffer = () => playerStateDispatch({ type: 'buffer' });
			const handleBufferEnd = () => playerStateDispatch({ type: 'bufferEnd' });

			return (
				<div className={className}>
					<ReactPlayer
						ref={ref}
						playing={isPlaying}
						url={url}
						muted={true}
						controls={true}
						config={reactPlayerConfig}
						style={{ position: 'sticky', top: '6dvh' }}
						width={'100%'}
						height={'56.25dvw'}
						onSeek={handleSeek}
						onPlay={handlePlay}
						onPause={handlePause}
						onBuffer={handleBuffer}
						onBufferEnd={handleBufferEnd}
						onProgress={handleProgress}
						onDuration={handleDuration}
					/>
				</div>
			);
		}
	)
)(() => {
	const {
		viewport: { isMobile },
	} = useAppState();

	return css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 90px;
		display: flex;
		align-items: center;

		${isMobile &&
		css`
			bottom: 30dvh;
		`};
	`;
});

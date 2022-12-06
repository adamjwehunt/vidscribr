import React, { RefObject } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ReactPlayer, { Config } from 'react-player';
import usePlayerContext from './playerContext';
import useAppContext from './appContext';
import { OnProgressProps } from 'react-player/base';
import { StyledComponent } from '../types';

const reactPlayerConfig: Config = {
	youtube: {
		playerVars: {
			wmode: 'opaque',
		},
	},
};

interface PlayerProps extends StyledComponent {
	url: string;
	playerRef: RefObject<ReactPlayer>;
}

export const Player = styled(({ className, url, playerRef }: PlayerProps) => {
	const {
		playerState: { isPlaying, isSeeking },
		playerDispatch,
	} = usePlayerContext();

	const dispatchPlayed = (seconds: number) => {
		if (isSeeking) return;
		playerDispatch({
			type: 'played',
			seconds,
		});
	};
	const handleDuration = (seconds: number) =>
		playerDispatch({
			type: 'duration',
			seconds,
		});
	const handleSeek = (seconds: number) => dispatchPlayed(seconds);
	const handleProgress = ({ playedSeconds }: OnProgressProps) =>
		dispatchPlayed(playedSeconds);
	const handlePlay = () => playerDispatch({ type: 'play' });
	const handlePause = () => playerDispatch({ type: 'pause' });
	const handleBuffer = () => playerDispatch({ type: 'buffer' });
	const handleBufferEnd = () => playerDispatch({ type: 'bufferEnd' });

	return (
		<div className={className}>
			<ReactPlayer
				ref={playerRef}
				playing={isPlaying}
				url={url}
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
})(() => {
	const {
		viewport: { isMobile },
	} = useAppContext();

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

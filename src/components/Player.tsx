import React, { RefObject } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ReactPlayer from 'react-player';
import usePlayerContext from './playerContext';
import useAppContext from './appContext';

interface PlayerProps {
	className?: string;
	url: string;
	reactPlayerRef: RefObject<ReactPlayer>;
}

export const Player = styled(
	({ className, url, reactPlayerRef }: PlayerProps) => {
		const {
			playerState: { isPlaying },
			playerDispatch,
		} = usePlayerContext();

		return (
			<div className={className}>
				<ReactPlayer
					style={{ position: 'sticky', top: '6dvh' }}
					ref={reactPlayerRef}
					url={url}
					playing={isPlaying}
					width={'100%'}
					height={'56.25dvw'}
					controls={true}
					progressInterval={200}
					config={{
						youtube: {
							playerVars: {
								wmode: 'opaque',
							},
						},
					}}
					onReady={() => {}}
					onDuration={(duration) =>
						playerDispatch({
							type: 'duration',
							seconds: duration,
						})
					}
					onProgress={({ playedSeconds }) =>
						playerDispatch({
							type: 'progress',
							seconds: playedSeconds,
						})
					}
					onSeek={(seconds) =>
						playerDispatch({
							type: 'progress',
							seconds,
						})
					}
					onPlay={() => playerDispatch({ type: 'play' })}
					onPause={() => playerDispatch({ type: 'pause' })}
					onBuffer={() => playerDispatch({ type: 'buffer' })}
					onBufferEnd={() => playerDispatch({ type: 'bufferEnd' })}
				/>
			</div>
		);
	}
)(() => {
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

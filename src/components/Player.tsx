import React, { Dispatch, ReactElement, RefObject } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ReactPlayer from 'react-player';
import { AppReducerAction } from './appReducer/types';

const PlayerWrapper = styled.div<{ isMobile: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 90px;
	display: flex;
	align-items: center;

	${({ isMobile }) =>
		isMobile &&
		css`
			bottom: 30dvh;
		`};
`;

interface PlayerProps {
	reactPlayerRef: RefObject<ReactPlayer>;
	dispatch: Dispatch<AppReducerAction>;
	url: string;
	isPlaying: boolean;
	isMobile: boolean;
}

export default function Player({
	reactPlayerRef,
	dispatch,
	url,
	isPlaying,
	isMobile,
}: PlayerProps): ReactElement {
	return (
		<PlayerWrapper isMobile={isMobile}>
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
					dispatch({
						type: 'duration',
						seconds: duration,
					})
				}
				onProgress={({ playedSeconds }) =>
					dispatch({
						type: 'progress',
						seconds: playedSeconds,
					})
				}
				onSeek={(seconds) =>
					dispatch({
						type: 'progress',
						seconds,
					})
				}
				onPlay={() => dispatch({ type: 'play' })}
				onPause={() => dispatch({ type: 'pause' })}
				onBuffer={() => dispatch({ type: 'buffer' })}
				onBufferEnd={() => dispatch({ type: 'bufferEnd' })}
			/>
		</PlayerWrapper>
	);
}

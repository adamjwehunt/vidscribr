import React, { Dispatch, ReactElement, RefObject } from 'react';
import { styled } from '@mui/material/styles';
import ReactPlayer from 'react-player';
import { Flex } from './Flex';
import useViewport from '../hooks/useViewport';

interface PlayerProps {
	reactPlayerRef: RefObject<ReactPlayer>;
	dispatch: Dispatch<any>;
	url: string;
	isPlaying: boolean;
}

const Wrapper = styled(Flex)<{ isMobile: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: ${({ isMobile }) => (isMobile ? 'calc(8vh + 175px)' : '90px')};
	padding: 8px 0;
`;

const PlayerContainer = styled(ReactPlayer)`
	position: sticky;
	top: 8px;
`;

export default function Player({
	reactPlayerRef,
	dispatch,
	url,
	isPlaying,
}: PlayerProps): ReactElement {
	const { isMobile } = useViewport();

	return (
		<Wrapper isMobile={isMobile}>
			<PlayerContainer
				onDuration={(number) => {
					console.log(
						`src/components/Player.tsx - 40 => number: `,
						'\n',
						number
					);
				}}
				ref={reactPlayerRef}
				url={url}
				playing={isPlaying}
				muted={true}
				width={'100%'}
				height={'56.25vw'}
				progressInterval={200}
				onReady={() =>
					dispatch({
						type: 'duration',
						seconds: reactPlayerRef.current?.getDuration() ?? 0,
					})
				}
				onProgress={({ playedSeconds }) => {
					console.log(
						`src/components/Player.tsx - 60 => playedSeconds: `,
						'\n',
						playedSeconds
					);
					dispatch({
						type: 'progress',
						seconds: playedSeconds,
					});
				}}
				onSeek={(seconds) => {
					console.log(
						`src/components/Player.tsx - 71 => seconds: `,
						'\n',
						seconds
					);
					dispatch({
						type: 'progress',
						seconds,
					});
				}}
				onPlay={() => dispatch({ type: 'play' })}
				onPause={() => dispatch({ type: 'pause' })}
			/>
		</Wrapper>
	);
}

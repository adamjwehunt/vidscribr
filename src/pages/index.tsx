import * as React from 'react';
import { useReducer, useEffect, useRef } from 'react';
import type { HeadFC } from 'gatsby';
import ReactPlayer from 'react-player';
import Player from '../components/Player';
import useVideoInfo from '../hooks/useVideoInfo';
import {
	appReducer,
	DEFAULT_APP_REDUCER_STATE,
} from '../components/appReducer';
import {
	AppReducerAction,
	AppReducerState,
} from '../components/appReducer/types';
import Controls from '../components/Controls';
import { GlobalStyles } from '../components/GlobalStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Flex } from '../components/Flex';
import styled from '@emotion/styled';
import Details from '../components/Details';
import SecondaryControls from '../components/SecondaryControls';
import useViewport from '../hooks/useViewport';
import Transcript from '../components/Transcript';

const theme = createTheme({
	palette: {
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#fff',
		},
	},
});

const Footer = styled(Flex)<{ isMobile: boolean }>`
	flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
	justify-content: space-between;
	padding: 0 16px;
	position: absolute;
	bottom: ${({ isMobile }) => (isMobile ? '8vh' : '0')};
	left: 0;
	right: 0;
	background-color: ${({ isMobile }) => (isMobile ? '#000' : '#181818')};
	align-items: end;
	${({ isMobile }) => (isMobile ? 'height: 200px;' : '')};
`;

const IndexPage = () => {
	const [appState, dispatch] = useReducer(
		(previousState: AppReducerState, action: AppReducerAction) =>
			appReducer(previousState, action),
		DEFAULT_APP_REDUCER_STATE
	);
	const reactPlayerRef = useRef<ReactPlayer | null>(null);
	const videoInfo = useVideoInfo(appState.url);
	const { isMobile } = useViewport();

	// console.log(`src/pages/index.tsx - 54 => videoInfo: `, '\n', videoInfo);

	// Temporarily hardcoding the video url
	useEffect(() => {
		dispatch({
			type: 'url',
			url: 'https://www.youtube.com/watch?v=Y0vaUa5A4Ec',
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Player
				reactPlayerRef={reactPlayerRef}
				dispatch={dispatch}
				isPlaying={appState.isPlaying}
				url={appState.url}
			/>
			<Footer isMobile={isMobile}>
				<Details
					thumbnailUrl={videoInfo?.videoDetails?.thumbnails[0]?.url ?? ''}
					title={videoInfo?.videoDetails?.title ?? ''}
					artist={videoInfo?.videoDetails?.author?.name ?? ''}
				/>
				<Controls
					reactPlayerRef={reactPlayerRef}
					dispatch={dispatch}
					isPlaying={appState.isPlaying}
					progress={appState.progress}
					duration={appState.duration}
				/>
				<SecondaryControls />
			</Footer>
			<Transcript captions={videoInfo?.captions} />
		</ThemeProvider>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

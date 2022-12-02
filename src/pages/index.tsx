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
import { GlobalStyles } from '../components/GlobalStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Transcript from '../components/Transcript';
import VideoTray from '../components/VideoTray';
import useViewport from '../hooks/useViewport';
import { SEO } from '../components/Seo';
import { AppContext, AppDispatchContext } from '../components/appContext';

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

const IndexPage = () => {
	const [appState, dispatch] = useReducer(
		(previousState: AppReducerState, action: AppReducerAction) =>
			appReducer(previousState, action),
		DEFAULT_APP_REDUCER_STATE
	);
	const reactPlayerRef = useRef<ReactPlayer | null>(null);
	const videoInfo = useVideoInfo(appState.url);
	const { isMobile } = useViewport();

	// Temporarily hardcoding the video url
	useEffect(() => {
		dispatch({
			type: 'url',
			url: 'https://www.youtube.com/watch?v=Y0vaUa5A4Ec',
		});
	}, []);

	return (
		<AppContext.Provider value={appState}>
			<AppDispatchContext.Provider value={dispatch}>
				<ThemeProvider theme={theme}>
					<GlobalStyles
						videoThumbnailUrl={videoInfo?.videoDetails?.thumbnails[0]?.url}
					/>
					{videoInfo && (
						<>
							<Player
								reactPlayerRef={reactPlayerRef}
								dispatch={dispatch}
								isPlaying={appState.isPlaying}
								url={appState.url}
								isMobile={isMobile}
							/>
							<VideoTray
								reactPlayerRef={reactPlayerRef}
								dispatch={dispatch}
								videoDetails={videoInfo.videoDetails}
								appState={appState}
								isMobile={isMobile}
								isBuffering={appState.isBuffering}
							/>
							{videoInfo?.captions?.length && (
								<Transcript
									reactPlayerRef={reactPlayerRef}
									dispatch={dispatch}
									progress={appState.progress}
									appState={appState}
									captions={videoInfo.captions}
									title={videoInfo.videoDetails.title ?? ''}
									artist={videoInfo.videoDetails.author?.name ?? ''}
									isMobile={isMobile}
									isBuffering={appState.isBuffering}
								/>
							)}
						</>
					)}
				</ThemeProvider>
			</AppDispatchContext.Provider>
		</AppContext.Provider>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

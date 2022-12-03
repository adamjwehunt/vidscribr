import * as React from 'react';
import { useEffect, useReducer } from 'react';
import type { HeadFC } from 'gatsby';
import {
	AppReducerAction,
	AppReducerState,
} from '../components/appReducer/types';
import {
	appReducer,
	DEFAULT_APP_REDUCER_STATE,
} from '../components/appReducer';
import { AppContext, AppDispatchContext } from '../components/appContext';
import { GlobalStyles } from '../components/GlobalStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SEO } from '../components/SEO';
import { PlayerPanel } from '../components/PlayerPanel';

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
					<GlobalStyles />
					<PlayerPanel url={appState.url} />
				</ThemeProvider>
			</AppDispatchContext.Provider>
		</AppContext.Provider>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

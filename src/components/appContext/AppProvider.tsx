import React, { ReactNode, useReducer } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppReducerAction, AppReducerState } from '../appReducer/types';
import { appReducer, DEFAULT_APP_REDUCER_STATE } from '../appReducer';
import { GlobalStyles } from '../GlobalStyles';
import { AppStateContext, AppStateDispatchContext } from '.';

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

interface AppProviderProps {
	children: (appState: AppReducerState) => ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
	const [appState, appStateDispatch] = useReducer(
		(previousState: AppReducerState, action: AppReducerAction) =>
			appReducer(previousState, action),
		DEFAULT_APP_REDUCER_STATE
	);

	return (
		<AppStateContext.Provider value={appState}>
			<AppStateDispatchContext.Provider value={appStateDispatch}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					{children(appState)}
				</ThemeProvider>
			</AppStateDispatchContext.Provider>
		</AppStateContext.Provider>
	);
};

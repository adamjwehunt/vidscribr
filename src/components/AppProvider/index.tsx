import React, { ReactNode, useReducer } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppReducerAction, AppReducerState } from './types';
import { GlobalStyles } from '../GlobalStyles';
import { AppStateContext, AppStateDispatchContext } from './appContext';
import { appReducer, DEFAULT_APP_REDUCER_STATE } from './appReducer';

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
	children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
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
					{children}
				</ThemeProvider>
			</AppStateDispatchContext.Provider>
		</AppStateContext.Provider>
	);
}

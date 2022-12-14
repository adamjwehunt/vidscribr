import { createContext, Dispatch, useContext } from 'react';
import useViewport from '../../hooks/useViewport';
import { AppReducerAction, AppReducerState } from './types';

export const AppStateContext = createContext<AppReducerState | null>(null);

export const AppStateDispatchContext =
	createContext<Dispatch<AppReducerAction> | null>(null);

export const useAppState = (): {
	appState: AppReducerState;
	viewport: ReturnType<typeof useViewport>;
} => {
	const appState = useContext(AppStateContext);

	if (appState === null) {
		throw Error('AppStateContext has not been provided!');
	}

	const viewport = useViewport();

	return { appState, viewport };
};

export const useAppStateDispatch = () => {
	const appStateDispatch = useContext(AppStateDispatchContext);

	if (!appStateDispatch) {
		throw Error('AppStateDispatchContext has not been provided.');
	}

	return appStateDispatch;
};

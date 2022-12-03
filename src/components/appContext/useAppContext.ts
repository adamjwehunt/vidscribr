import { Dispatch, useContext } from 'react';
import { AppContext, AppDispatchContext } from '.';
import useViewport from '../../hooks/useViewport';
import { AppReducerAction, AppReducerState } from '../appReducer/types';

export default function useAppContext(): {
	appState: AppReducerState;
	appDispatch: Dispatch<AppReducerAction>;
	viewport: ReturnType<typeof useViewport>;
} {
	const appState = useContext(AppContext);
	if (appState === null) {
		throw new Error('appState cannot be null');
	}
	const appDispatch = useContext(AppDispatchContext);
	if (appDispatch === null) {
		throw new Error('appDispatch cannot be null');
	}

	const viewport = useViewport();

	return { appState, appDispatch, viewport };
}

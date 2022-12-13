import { AppReducer, AppReducerAction, AppReducerState } from './types';

export const DEFAULT_APP_REDUCER_STATE: AppReducerState = Object.freeze({
	// Temporary default value
	url: 'https://www.youtube.com/watch?v=Y0vaUa5A4Ec',
});

export const appReducer: AppReducer = (
	previousState: AppReducerState,
	action: AppReducerAction
): AppReducerState => {
	switch (action.type) {
		case 'url':
			return {
				...previousState,
				url: action.url,
			};

		default:
			return previousState;
	}
};

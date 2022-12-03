import { AppReducer, AppReducerAction, AppReducerState } from './types';

export const DEFAULT_APP_REDUCER_STATE: AppReducerState = Object.freeze({
	url: '',
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

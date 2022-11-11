import { AppReducer, AppReducerAction, AppReducerState } from './types';

export const DEFAULT_APP_REDUCER_STATE: AppReducerState = Object.freeze({
	url: '',
	isPlaying: false,
	duration: 0,
	progress: 0,
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
		case 'play':
			return {
				...previousState,
				isPlaying: true,
			};
		case 'pause':
			return {
				...previousState,
				isPlaying: false,
			};
		case 'duration':
			return {
				...previousState,
				duration: action.seconds,
			};
		case 'progress':
			return {
				...previousState,
				progress: action.seconds,
			};

		default:
			return previousState;
	}
};

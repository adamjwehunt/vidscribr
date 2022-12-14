import {
	PlayerReducer,
	PlayerReducerAction,
	PlayerReducerState,
} from './types';

export const DEFAULT_PLAYER_REDUCER_STATE: PlayerReducerState = Object.freeze({
	isPlaying: false,
	isSeeking: false,
	hasSeeked: false,
	isBuffering: false,
	duration: 0,
});

export const playerReducer: PlayerReducer = (
	previousState: PlayerReducerState,
	action: PlayerReducerAction
): PlayerReducerState => {
	switch (action.type) {
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
		case 'seek':
			return {
				...previousState,
				isSeeking: true,
			};
		case 'seekEnd':
			return {
				...previousState,
				isSeeking: false,
				hasSeeked: true,
			};
		case 'seekComplete':
			return {
				...previousState,
				hasSeeked: false,
			};
		case 'buffer':
			return {
				...previousState,
				isBuffering: true,
			};
		case 'bufferEnd':
			return {
				...previousState,
				isBuffering: false,
			};
		case 'duration':
			return {
				...previousState,
				duration: action.seconds,
			};

		default:
			return previousState;
	}
};

import {
	PlayerReducer,
	PlayerReducerAction,
	PlayerReducerState,
} from './types';

export const DEFAULT_PLAYER_REDUCER_STATE: PlayerReducerState = Object.freeze({
	isPlaying: false,
	isSeeking: false,
	isBuffering: false,
	played: 0,
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
		case 'played':
			return {
				...previousState,
				played: action.seconds,
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

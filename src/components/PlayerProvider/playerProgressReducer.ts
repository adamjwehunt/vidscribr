import {
	PlayerProgressReducer,
	PlayerProgressReducerAction,
	PlayerProgressReducerState,
} from '../playerProgressReducer/types';

export const DEFAULT_PLAYER_PROGRESS_REDUCER_STATE: PlayerProgressReducerState =
	Object.freeze({
		played: 0,
	});

export const playerProgressReducer: PlayerProgressReducer = (
	previousState: PlayerProgressReducerState,
	action: PlayerProgressReducerAction
): PlayerProgressReducerState => {
	switch (action.type) {
		case 'played':
			return {
				...previousState,
				played: action.seconds,
			};

		default:
			return previousState;
	}
};

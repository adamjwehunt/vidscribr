import { createContext, Dispatch } from 'react';
import {
	PlayerReducerAction,
	PlayerReducerState,
} from '../playerReducer/types';
import usePlayerContext from './usePlayerContext';

export const PlayerContext = createContext<PlayerReducerState | null>(null);
export const PlayerDispatchContext =
	createContext<Dispatch<PlayerReducerAction> | null>(null);
export default usePlayerContext;

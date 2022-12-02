import { createContext, Dispatch } from 'react';
import { AppReducerAction, AppReducerState } from '../appReducer/types';

export const AppContext = createContext<AppReducerState | null>(null);
export const AppDispatchContext =
	createContext<Dispatch<AppReducerAction> | null>(null);

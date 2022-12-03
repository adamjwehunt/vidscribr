import { createContext, Dispatch } from 'react';
import {
	AppReducerAction,
	AppReducerState,
} from '../appReducer/types';
import useAppContext from './useAppContext';

export const AppContext = createContext<AppReducerState | null>(null);
export const AppDispatchContext =
	createContext<Dispatch<AppReducerAction> | null>(null);
export default useAppContext;

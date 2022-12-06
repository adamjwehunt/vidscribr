import { createContext, MutableRefObject } from 'react';
import ReactPlayer from 'react-player';
import usePlayerRefContext from './usePlayerRefContext';

export const PlayerRefContext =
	createContext<MutableRefObject<ReactPlayer> | null>(null);
export default usePlayerRefContext;

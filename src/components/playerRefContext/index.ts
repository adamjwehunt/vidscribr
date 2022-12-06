import { createContext } from 'react';
import ReactPlayer from 'react-player';
import usePlayerRefContext from './usePlayerRefContext';

export const PlayerRefContext =
	createContext<React.MutableRefObject<ReactPlayer | null> | null>(null);
export default usePlayerRefContext;

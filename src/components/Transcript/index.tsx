import React, { Dispatch, ReactElement, RefObject } from 'react';
import Top from './Top';
import Bottom from './Bottom';
import TranscriptControls from './TranscriptControls';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import ReactPlayer from 'react-player';
import { ICaption } from '../../types';
import { AppReducerAction, AppReducerState } from '../appReducer/types';

interface TranscriptProps {
	title: string;
	artist: string;
	isMobile: boolean;
	isBuffering: boolean;
	captions: ICaption[];
	appState: AppReducerState;
	progress: number;
	dispatch: Dispatch<AppReducerAction>;
	reactPlayerRef: RefObject<ReactPlayer>;
}

export default function Transcript({
	captions,
	title,
	artist,
	appState,
	reactPlayerRef,
	dispatch,
	isMobile,
	isBuffering,
}: TranscriptProps): ReactElement {
	const [isExpanded, setIsExpanded] = React.useState(false);
	const handleToggleExpand = () => setIsExpanded(!isExpanded);

	return (
		<MotionConfig transition={{ type: 'ease-in-out', duration: 0.35 }}>
			<AnimatePresence>
				{isExpanded && (
					<Top
						key={'top'}
						title={title}
						artist={artist}
						onToggleExpand={handleToggleExpand}
					/>
				)}
				<Bottom
					reactPlayerRef={reactPlayerRef}
					isMobile={isMobile}
					isExpanded={isExpanded}
					progress={appState.progress}
					captions={captions}
					onToggleExpand={handleToggleExpand}
				/>
				{isExpanded && (
					<TranscriptControls
						key={'transcriptControls'}
						dispatch={dispatch}
						reactPlayerRef={reactPlayerRef}
						isPlaying={appState.isPlaying}
						isBuffering={appState.isBuffering}
						progress={appState.progress}
						duration={appState.duration}
						isMobile={isMobile}
					/>
				)}
			</AnimatePresence>
		</MotionConfig>
	);
}

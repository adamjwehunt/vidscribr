import React, { RefObject } from 'react';
import { Top } from './Top';
import { Bottom } from './Bottom';
import { TranscriptControls } from './TranscriptControls';
import { MotionConfig } from 'framer-motion';
import ReactPlayer from 'react-player';

interface TranscriptProps {
	playerRef: RefObject<ReactPlayer>;
	videoInfo: any;
}

export default function Transcript({
	playerRef,
	videoInfo,
}: TranscriptProps) {
	if (!videoInfo?.captions?.length) {
		return null;
	}

	const { videoDetails, captions } = videoInfo;
	const [isExpanded, setIsExpanded] = React.useState(false);
	const handleToggleExpand = () => setIsExpanded(!isExpanded);

	return (
		<MotionConfig transition={{ type: 'ease-in-out', duration: 0.35 }}>
			<Top
				key={'top'}
				title={videoDetails?.title ?? ''}
				artist={videoDetails?.author?.name ?? ''}
				isExpanded={isExpanded}
				onToggleExpand={handleToggleExpand}
			/>
			<Bottom
				playerRef={playerRef}
				captions={captions}
				isExpanded={isExpanded}
				onToggleExpand={handleToggleExpand}
			/>
			<TranscriptControls
				key={'transcriptControls'}
				isExpanded={isExpanded}
				playerRef={playerRef}
			/>
		</MotionConfig>
	);
}

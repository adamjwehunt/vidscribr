import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { AppReducerAction, AppReducerState } from './appReducer/types';
import Controls from './Controls';
import Details from './Details';
import SecondaryControls from './SecondaryControls';

const VideoTrayContainer = styled.div<{ isMobile: boolean }>`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	padding: 0 1.5em;
	flex-direction: row;
	justify-content: space-between;
	align-items: end;
	background-color: #181818;

	${({ isMobile }) =>
		isMobile &&
		css`
			bottom: 6dvh;
			height: 23dvh;
			flex-direction: column;
			background-color: transparent;
		`};
`;

interface VideoTrayProps {
	dispatch: React.Dispatch<AppReducerAction>;
	videoDetails: any;
	reactPlayerRef: React.RefObject<any>;
	appState: AppReducerState;
	isMobile: boolean;
	isBuffering: boolean;
}

export default function VideoTray({
	dispatch,
	videoDetails,
	reactPlayerRef,
	appState,
	isMobile,
	isBuffering,
}: VideoTrayProps) {
	return (
		<VideoTrayContainer isMobile={isMobile}>
			<Details
				thumbnailUrl={videoDetails.thumbnails[0]?.url ?? ''}
				title={videoDetails.title ?? ''}
				artist={videoDetails.author?.name ?? ''}
				isMobile={isMobile}
			/>
			<Controls
				reactPlayerRef={reactPlayerRef}
				dispatch={dispatch}
				isPlaying={appState.isPlaying}
				progress={appState.progress}
				duration={appState.duration}
				isMobile={isMobile}
				isBuffering={isBuffering}
			/>
			<SecondaryControls isMobile={isMobile} />
		</VideoTrayContainer>
	);
}

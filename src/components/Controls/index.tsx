import React, { RefObject } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ControlsButtons } from './ControlsButtons';
import Scrubber from './Scrubber';
import useAppContext from '../appContext';

interface ControlsProps {
	reactPlayerRef: RefObject<ReactPlayer>;
	className?: string;
}

export const Controls = styled(
	({ reactPlayerRef, className }: ControlsProps) => (
		<div className={className}>
			<ControlsButtons reactPlayerRef={reactPlayerRef} />
			<Scrubber reactPlayerRef={reactPlayerRef} />
		</div>
	)
)(() => {
	const {
		viewport: { isMobile },
	} = useAppContext();

	return css`
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		${isMobile &&
		css`
			flex-direction: column-reverse;
		`};
	`;
});

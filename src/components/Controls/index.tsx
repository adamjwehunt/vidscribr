import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ControlsButtons } from './ControlsButtons';
import { Scrubber } from './Scrubber';
import { StyledComponent } from '../../types';
import { useAppState } from '../AppProvider/appContext';

export const Controls = styled(({ className }: StyledComponent) => (
	<div className={className}>
		<ControlsButtons />
		<Scrubber />
	</div>
))(() => {
	const {
		viewport: { isMobile },
	} = useAppState();

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

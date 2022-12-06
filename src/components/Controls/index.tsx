import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ControlsButtons } from './ControlsButtons';
import { Scrubber } from './Scrubber';
import useAppContext from '../appContext';
import { StyledComponent } from '../../types';

export const Controls = styled(({ className }: StyledComponent) => (
	<div className={className}>
		<ControlsButtons />
		<Scrubber />
	</div>
))(() => {
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

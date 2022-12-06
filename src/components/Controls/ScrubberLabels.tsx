import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TimeLeftLabel } from './TimeLeftLabel';
import { PlayedLabel } from './PlayedLabel';
import { StyledComponent } from '../../types';

export const ScrubberLabels = styled(({ className }: StyledComponent) => (
	<div className={className}>
		<PlayedLabel />
		<TimeLeftLabel />
	</div>
))(css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: -0.8em;
`);

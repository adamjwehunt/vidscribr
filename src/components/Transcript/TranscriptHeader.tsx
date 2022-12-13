import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { StyledComponent } from '../../types';
import { ExpandButton } from './ExpandButton';

interface TranscriptHeaderProps extends StyledComponent {
	onToggleExpand: () => void;
}

export const TranscriptHeader = styled(
	({ className, onToggleExpand }: TranscriptHeaderProps) => (
		<div className={className}>
			{'Transcript'}
			<ExpandButton onClick={onToggleExpand} />
		</div>
	)
)(css`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0.7em;
	font-size: 1.1em;
	font-weight: 600;
`);

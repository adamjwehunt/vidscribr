import styled from '@emotion/styled';
import React from 'react';
import { ExpandButton } from './ExpandButton';
interface TranscriptHeaderProps {
	isMobile: boolean;
	onToggleExpand: () => void;
}
export default function TranscriptHeader({
	isMobile,
	onToggleExpand,
}: TranscriptHeaderProps) {
	const TranscriptHeaderContainer = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0.7em;
		font-size: 1.1em;
		font-weight: 600;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	`;

	return (
		<TranscriptHeaderContainer>
			{'Transcript'}
			<ExpandButton isMobile={isMobile} onClick={onToggleExpand} />
		</TranscriptHeaderContainer>
	);
}

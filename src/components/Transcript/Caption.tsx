import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface CaptionProps {
	isActive: boolean;
	text: string;
	captionRef: ((activeCaption: any) => void) | null;
	onClick: () => void;
}

const CaptionWrapper = styled.div<{ isActive: boolean }>`
	color: rgba(0, 0, 0, 0.7);
	font-size: 1.9em;
	font-weight: 600;
	line-height: 1.4em;
	padding: 0 1em 0.4em;

	&:first-letter {
		text-transform: capitalize;
	}

	${({ isActive }) =>
		isActive &&
		css`
			color: #fff;
		`};
`;

export default function Caption({
	isActive,
	text,
	captionRef,
	onClick,
}: CaptionProps) {
	return (
		<CaptionWrapper ref={captionRef} isActive={isActive} onClick={onClick}>
			{text}
		</CaptionWrapper>
	);
}

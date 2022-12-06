import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface ScrubberLabelProps {
	className?: string;
	text: string;
}

export const ScrubberLabel = styled(({ text }: ScrubberLabelProps) => (
	<div>{text}</div>
))(css`
	color: white;
	font-size: 0.75em;
	opacity: 0.6;
	font-weight: 500;
	letter-spacing: 0.2;
`);

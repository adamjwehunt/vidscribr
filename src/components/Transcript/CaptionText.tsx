import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledComponent } from '../../types';

interface CaptionTextProps extends StyledComponent {
	isActive: boolean;
	text: string;
	captionRef: ((activeCaption: any) => void) | null;
	onClick: () => void;
}

export const CaptionText = styled(
	({ className, text, captionRef, onClick }: CaptionTextProps) => (
		<div className={className} ref={captionRef} onClick={onClick}>
			{text}
		</div>
	)
)(({ isActive }) => {
	return css`
		color: rgba(0, 0, 0, 0.7);
		font-size: 1.9em;
		font-weight: 600;
		line-height: 1.4em;
		padding: 0 1em 0.4em;

		&:first-letter {
			text-transform: capitalize;
		}

		${isActive &&
		css`
			color: #fff;
		`};
	`;
});

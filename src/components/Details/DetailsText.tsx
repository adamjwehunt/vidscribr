import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledComponent } from '../../types';
import { Marquee } from '../Marquee';

interface DetailsTextProps extends StyledComponent {
	title?: string;
	artist?: string;
}
export const DetailsText = styled(
	({ className, title, artist }: DetailsTextProps) => (
		<div className={className}>
			<Marquee
				text={title}
				textStyle={css`
					font-size: 1.5em;
					font-weight: 500;
				`}
			/>
			<Marquee
				text={artist}
				textStyle={css`
					font-size: 1em;
					letter-spacing: 0.02em;
					opacity: 0.6;
				`}
			/>
		</div>
	)
)(css`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	line-height: 1.2;
`);

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Marquee } from '../Marquee';

interface DetailsProps {
	thumbnailUrl: string;
	title: string;
	artist: string;
	isMobile: boolean;
}

const DetailsContainer = styled.div<{ isMobile: boolean }>`
	display: flex;
	width: 30%;

	${({ isMobile }) =>
		isMobile &&
		css`
			width: 100%;
		`};
`;

const TextContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	line-height: 1.2;
`;

export default function Details({
	thumbnailUrl,
	title,
	artist,
	isMobile,
}: DetailsProps) {
	return (
		<DetailsContainer isMobile={isMobile}>
			{isMobile ? null : <img src={thumbnailUrl} />}
			<TextContainer>
				<Marquee
					text={title}
					options={{ textStyle: { fontSize: '1.5em', fontWeight: 500 } }}
				/>
				<Marquee
					text={artist}
					options={{
						textStyle: {
							fontSize: '1em',
							letterSpacing: '0.02em',
							opacity: '0.6',
						},
					}}
				/>
			</TextContainer>
		</DetailsContainer>
	);
}

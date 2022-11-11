import React from 'react';
import { Flex } from '../../components/Flex';
import styled from '@emotion/styled';
import useViewport from '../../hooks/useViewport';

interface DetailsProps {
	thumbnailUrl: string;
	title: string;
	artist: string;
}

const Wrapper = styled(Flex)<{ isMobile: boolean }>`
	width: ${({ isMobile }) => (isMobile ? '100%' : '30%')};
`;

const TextWrapper = styled(Flex)`
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Text = styled.div`
	width: 100%;
	max-height: 3rem;
	overflow: hidden;
	position: relative;
  line-height: 1.5;

	/* & ::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 50px;
		background-image: linear-gradient(to right, rgba(24, 24, 24, 0), #000);
		z-index: 2;
		pointer-events: none;
	} */

	& p {
		font-weight: bold;
		font-size: 1rem;
		overflow: hidden;
		text-align: justify;
		white-space: nowrap;
		margin: 0;
	}
`;

const TitleText = styled(Text)`
	& p {
		font-size: 1.4rem;
	}
`;

const ArtistText = styled(Text)`
	opacity: 0.6;
`;

export default function Details({ thumbnailUrl, title, artist }: DetailsProps) {
	const { isMobile } = useViewport();

	return (
		<Wrapper isMobile={isMobile}>
			{isMobile ? null : <img src={thumbnailUrl} />}
			<TextWrapper>
				<TitleText>
					<p>{title}</p>
				</TitleText>
				<ArtistText>
					<p>{artist}</p>
				</ArtistText>
			</TextWrapper>
		</Wrapper>
	);
}

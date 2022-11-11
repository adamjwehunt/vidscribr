import React from 'react';
import { styled } from '@mui/material/styles';
import useViewport from '../../hooks/useViewport';
import { Flex } from '../Flex';
import { MenuButton } from './MenuButton';
import { DownloadButton } from './DownloadButton';

const Wrapper = styled(Flex)<{ isMobile: boolean }>`
	width: ${({ isMobile }) => (isMobile ? '100%' : '30%')};
	height: 24px;
	justify-content: space-between;
`;

export default function SecondaryControls() {
	const { isMobile } = useViewport();

	return (
		<Wrapper isMobile={isMobile}>
			<DownloadButton />
			<MenuButton />
		</Wrapper>
	);
}

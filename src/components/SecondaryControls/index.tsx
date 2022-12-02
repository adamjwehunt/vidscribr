import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MenuButton } from './MenuButton';
import { DownloadButton } from './DownloadButton';

const SecondaryControlsContainer = styled.div<{ isMobile: boolean }>`
	width: 30%;
	justify-content: space-between;
	display: flex;
	margin-top: -0.5em;

	${({ isMobile }) =>
		isMobile &&
		css`
			width: 100%;
		`};
`;

interface SecondaryControlsProps {
	isMobile: boolean;
}

export default function SecondaryControls({
	isMobile,
}: SecondaryControlsProps) {
	return (
		<SecondaryControlsContainer isMobile={isMobile}>
			<div style={{ marginLeft: '-8px' }}>
				<DownloadButton isMobile={isMobile} />
			</div>
			<div style={{ marginRight: '-8px' }}>
				<MenuButton isMobile={isMobile} />
			</div>
		</SecondaryControlsContainer>
	);
}

import React from 'react';
import styled from '@emotion/styled';
import { SecondaryButton } from './SecondaryButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { css } from '@emotion/react';
import { StyledComponent } from '../../types';

export const DownloadButton = styled(({ className }: StyledComponent) => {
	const handleDownloadButtonClick = () => {};

	return (
		<div className={className}>
			<SecondaryButton
				icon={FileDownloadIcon}
				ariaLabel={'Open downloads menu'}
				onClick={handleDownloadButtonClick}
			/>
		</div>
	);
})(
	css`
		margin-left: -8px;
	`
);

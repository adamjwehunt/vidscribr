import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
interface DownloadButtonProps {
	isMobile: boolean;
}

export const DownloadButton = styled(({ isMobile }: DownloadButtonProps) => {
	const svgStyle = {
		height: isMobile ? '1em' : '16px',
		width: '100%',
		fill: `hsla(0,0%, 100%, ${isMobile ? '1' : '0.7'})`,
	};

	return (
		<IconButton
			size="medium"
			aria-label={'Menu'}
			color="primary"
			disableRipple
			sx={{
				'&:hover': {
					backgroundColor: 'transparent',
					'& svg': {
						fill: 'white!important',
					},
				},
				'&:active': {
					'& svg': {
						fill: 'hsla(0,0%,100%,.7)!important',
					},
				},
			}}
			component="label"
			onClick={() => {}}
		>
			<FileDownloadIcon
				style={{
					height: isMobile ? '1em' : '16px',
					width: '100%',
					fill: `hsla(0,0%, 100%, ${isMobile ? '1' : '0.7'})`,
				}}
			/>
		</IconButton>
	);
})`
	&:hover svg {
		fill: white;
	}
`;

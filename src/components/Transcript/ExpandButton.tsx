import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import useViewport from '../../hooks/useViewport';

export const ExpandButton = styled(({ onClick }: { onClick: () => void }) => {
	const { isMobile } = useViewport();
	const svgStyle = {
		height: isMobile ? '24px' : '16px',
		width: '100%',
		fill: 'hsla(0,0%,100%,.7)',
	};

	return (
		<IconButton
			size="medium"
			aria-label={'Menu'}
			color="primary"
			disableRipple
			sx={{
				padding: 0,
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
			onClick={onClick}
		>
			<OpenInFullIcon style={svgStyle} />
		</IconButton>
	);
})`
	&:hover svg {
		fill: white;
	}
`;

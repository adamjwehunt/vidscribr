import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useViewport from '../../hooks/useViewport';

export const MenuButton = styled(() => {
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
			<MenuIcon style={svgStyle} />
		</IconButton>
	);
})`
	&:hover svg {
		fill: white;
	}
`;

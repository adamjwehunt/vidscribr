import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface MenuButtonProps {
	isMobile: boolean;
}

export const MenuButton = styled(({ isMobile }: MenuButtonProps) => {
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
			<MenuIcon style={svgStyle} />
		</IconButton>
	);
})`
	&:hover svg {
		fill: white;
	}
`;

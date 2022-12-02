import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface MinimizeButtonProps {
	onClick: () => void;
}

const ChevronDownIcon = styled(ArrowBackIosIcon)`
	transform: rotate(-90deg);
	margin-top: -0.4em;
`;

export const MinimizeButton = styled(({ onClick }: MinimizeButtonProps) => {
	return (
		<IconButton
			size="medium"
			aria-label={'Menu'}
			color="primary"
			disableRipple
			sx={{
				fontSize: '.8em',
				borderRadius: '1.5rem',
				backgroundColor: 'rgba(0, 0, 0, 0.60)',
				height: '3em',
				width: '3em',
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
			<ChevronDownIcon />
		</IconButton>
	);
})`
	&:hover svg {
		fill: white;
	}
`;

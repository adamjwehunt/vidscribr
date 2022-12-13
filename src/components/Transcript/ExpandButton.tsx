import React from 'react';
import { useAppState } from '../appContext';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { css } from '@emotion/react';

interface ExpandButtonProps {
	onClick: () => void;
}

export const ExpandButton = styled(({ onClick }: ExpandButtonProps) => {
	const {
		viewport: { isMobile },
	} = useAppState();

	return (
		<IconButton
			size="medium"
			aria-label={'Menu'}
			color="primary"
			disableRipple
			sx={{
				fontSize: '.8em',
				borderRadius: '1.5em',
				backgroundColor: 'rgba(0, 0, 0, 0.55)',
				height: '1.2em',
				padding: '1em 0.1em 1em 1.35em',
				letterSpacing: '.05em',
				marginTop: '-0.25em',
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
			<div>{'MORE'}</div>
			<OpenInFullIcon
				style={{
					height: isMobile ? '0.7em' : '16px',
					marginLeft: '0.25em',
				}}
			/>
		</IconButton>
	);
})(css`
	&:hover svg {
		fill: white;
	}
`);

import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchTranscriptButtonProps {
	onClick: () => void;
}

export const SearchTranscriptButton = styled(
	({ onClick }: SearchTranscriptButtonProps) => (
		<IconButton
			size="medium"
			aria-label={'Menu'}
			color="primary"
			disableRipple
			sx={{
				fontSize: '.8em',
				borderRadius: '1.5em',
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
			<SearchIcon />
		</IconButton>
	)
)`
	&:hover svg {
		fill: white;
	}
`;

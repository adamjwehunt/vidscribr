import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchTranscriptButtonProps {
	onClick: () => void;
}

export const SearchTranscriptButton = styled(
	({ onClick }: SearchTranscriptButtonProps) => {
		const svgStyle = {
			// marginTop: '-0.4em',
			// height: isMobile ? '0.7em' : '16px',
			// marginLeft: '0.25em',
			// width: '100%',
			// fill: 'hsla(0,0%,100%,.7)',
		};

		return (
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
					// padding: '1.em',
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
				<SearchIcon style={svgStyle} />
			</IconButton>
		);
	}
)`
	&:hover svg {
		fill: white;
	}
`;

import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import { css } from '@emotion/react';
import useAppContext from '../appContext';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { StyledComponent } from '../../types';

interface SecondaryButtonProps extends StyledComponent {
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
		muiName: string;
	};
	ariaLabel: string;
	onClick: () => void;
}

export const SecondaryButton = styled(
	({ className, icon: Icon, ariaLabel, onClick }: SecondaryButtonProps) => (
		<IconButton
			size="medium"
			aria-label={ariaLabel}
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
			onClick={onClick}
		>
			<Icon className={className} />
		</IconButton>
	)
)(() => {
	const {
		viewport: { isMobile },
	} = useAppContext();

	return css`
		height: 16px;
		width: 100%;
		fill: hsla(0, 0%, 100%, 0.7);

		${isMobile &&
		css`
			height: 1em;
			fill: hsla(0, 0%, 100%, 1);
		`};
	`;
});

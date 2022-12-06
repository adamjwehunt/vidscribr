import React from 'react';
import styled from '@emotion/styled';
import { SecondaryButton } from './SecondaryButton';
import MenuIcon from '@mui/icons-material/Menu';
import { css } from '@emotion/react';
import { StyledComponent } from '../../types';

export const MenuButton = styled(({ className }: StyledComponent) => {
	const handleMenuButtonClick = () => {};

	return (
		<div className={className}>
			<SecondaryButton
				icon={MenuIcon}
				ariaLabel={'Menu'}
				onClick={handleMenuButtonClick}
			/>
		</div>
	);
})(
	css`
		margin-right: -8px;
	`
);

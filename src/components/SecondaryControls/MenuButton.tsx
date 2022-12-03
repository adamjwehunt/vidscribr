import React from 'react';
import styled from '@emotion/styled';
import { SecondaryButton } from './SecondaryButton';
import MenuIcon from '@mui/icons-material/Menu';
import { css } from '@emotion/react';

interface MenuButtonProps {
	className?: string;
}

export const MenuButton = styled(({ className }: MenuButtonProps) => {
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

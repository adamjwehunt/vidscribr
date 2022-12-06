import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import useAppContext from '../appContext';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { StyledComponent } from '../../types';

interface SkipIconProps extends StyledComponent {
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
		muiName: string;
	};
}

export const SkipIcon = styled(({ icon: Icon, className }: SkipIconProps) => (
	<Icon className={className} />
))(() => {
	const {
		viewport: { isMobile },
	} = useAppContext();

	return css`
		height: 1.3em;
		width: 100%;
		fill: hsla(0, 0%, 100%, 0.7);

		${isMobile &&
		css`
			fill: hsla(0, 0%, 100%, 1);
		`};
	`;
});

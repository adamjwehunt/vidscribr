import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { StyledComponent } from '../../types';
import { useAppState } from '../AppProvider/appContext';

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
	} = useAppState();

	return css`
		height: 1.3em;
		fill: hsla(0, 0%, 100%, 0.7);

		${isMobile &&
		css`
			fill: hsla(0, 0%, 100%, 1);
		`};
	`;
});

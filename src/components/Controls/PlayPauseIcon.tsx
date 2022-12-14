import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { StyledComponent } from '../../types';

interface PlayPauseIconProps extends StyledComponent {
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
		muiName: string;
	};
}

export const PlayPauseIcon = styled(
	({ className, icon: Icon }: PlayPauseIconProps) => (
		<Icon className={className} />
	)
)(
	css`
		height: 2.4em;
		width: auto;
	`
);

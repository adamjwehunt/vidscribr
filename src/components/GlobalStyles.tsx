import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
	<Global
		styles={css`
			body {
				background-color: #000;
				margin: 0;
				color: #fff;
				font-family: 'Roboto', sans-serif;
			}
		`}
	/>
);

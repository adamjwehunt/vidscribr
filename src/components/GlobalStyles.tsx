import React, { useEffect, useState } from 'react';
import { Global, css } from '@emotion/react';
import extractColors from 'extract-colors';

interface VideoColor {
	population: number;
	rgb: number[];
}
interface VideoColors {
	DarkMuted?: VideoColor
}

export const GlobalStyles = ({ videoColors }: any) => {
	const [backgroundColor, setBackgroundColor] = useState('#000');

	return (
		<Global
			styles={css`
				body {
					background-color: ${backgroundColor};
					margin: 0;
					color: #fff;
					font-family: 'Roboto', sans-serif;
				}
			`}
		/>
	);
};

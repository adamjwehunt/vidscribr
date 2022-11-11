import { useMediaQuery } from 'react-responsive';

export default function useViewport() {
	const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
	const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
	const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

	return {
		isBigScreen,
		isMobile,
		isPortrait,
		isRetina,
	};
}

import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { SEO } from '../components/SEO';
import { PlayerPanel } from '../components/PlayerPanel';
import { AppProvider } from '../components/appContext/AppProvider';

const IndexPage = () => {
	return (
		<AppProvider>
			{(appState) => <PlayerPanel url={appState.url} />}
		</AppProvider>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

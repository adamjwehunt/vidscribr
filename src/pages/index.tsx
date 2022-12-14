import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { SEO } from '../components/SEO';
import AppProvider from '../components/AppProvider';
import PlayerPanel from '../components/PlayerPanel';

const IndexPage = () => (
	<AppProvider>
		<PlayerPanel />
	</AppProvider>
);

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

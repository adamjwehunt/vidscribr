import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { SEO } from '../components/SEO';
import AppProvider from '../components/AppProvider';
import PlayerPanel from '../components/PlayerPanel';
import styled from '@emotion/styled';
import { StyledComponent } from '../types';

const IndexPage = styled(({ className }: StyledComponent) => (
	<AppProvider>
		<div className={className}>
			<PlayerPanel />
		</div>
	</AppProvider>
))`
	position: fixed;
	inset: 0;
	overflow-y: scroll;
`;

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { Flex } from '../Flex';
import styled from '@emotion/styled';
import { ExpandButton } from './ExpandButton';

const Wrapper = styled(motion.div)`
	background: coral;
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
`;

const CaptionsTop = styled(motion.div)`
	position: absolute;
  z-index: 1;
	left: '0';
	right: '0';
  top: '0';
	background: coral;
	border-radius: 4px;
	padding: 12px;
	align-items: flex-start;
`;

const Content = styled(Flex)`
	width: 100%;
  padding: 16px;
	flex-direction: column;
`;

const TranscriptHeader = styled(Flex)`
	margin-bottom: 16px;
	width: 100%;
`;

const Captions = styled(Flex)`
	width: 100%;
	flex-direction: column;
	overflow: scroll;
`;

export default function Transcript({ captions }: any): ReactElement {
	// console.log(`src/components/Transcript/index.tsx - 45 => captions: `, '\n', captions);
	const [isExpanded, setIsExpanded] = React.useState(false);

	return (
		<>
			<CaptionsTop
				animate={isExpanded ? 'expanded' : 'minimized'}
				variants={{
					expanded: {
						bottom: '7vh',
					},
					minimized: {
						bottom: '0',
					},
				}}
			></CaptionsTop>
			<Wrapper
				animate={isExpanded ? 'expanded' : 'minimized'}
				variants={{
					expanded: {
						top: '7vh',
						bottom: '0',
						left: '0',
						right: '0',
					},
					minimized: {
						top: '96vh',
						bottom: '-175px',
						left: '16px',
						right: '16px',
					},
				}}
			>
				<Content>
					<TranscriptHeader>
						<TranscriptHeader>Transcript</TranscriptHeader>
						<ExpandButton onClick={() => setIsExpanded(!isExpanded)} />
					</TranscriptHeader>
					{captions && captions.length ? (
						<Captions>
							{captions.map((caption: any) => (
								<div>{caption?.text}</div>
							))}
						</Captions>
					) : null}
				</Content>
			</Wrapper>
		</>
	);
}

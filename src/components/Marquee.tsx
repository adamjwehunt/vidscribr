import React, { useRef } from 'react';
import styled from '@emotion/styled';

interface MarqueeProps {
	text: string;
	options?: any;
}

export const Marquee = ({ text, options }: MarqueeProps) => {
	const MarqueeWrapperRef = useRef<HTMLInputElement>(null);
	const textRef = useRef<HTMLInputElement>(null);

	const MarqueeWrapper = styled.div`
		width: 100%;
		overflow: hidden;
	`;

	const Text = styled.div`
		text-align: justify;
		white-space: nowrap;
	`;

	return (
		<MarqueeWrapper ref={MarqueeWrapperRef}>
			<Text ref={textRef} style={options?.textStyle}>
				{text}
			</Text>
		</MarqueeWrapper>
	);
};

import React, { RefObject, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import Caption from './Caption';
import { ICaption } from '../../types';
import ReactPlayer from 'react-player';

const CaptionsWrapper = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1em 0;
	background-color: rgb(185, 153, 190);

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		background-image: linear-gradient(
			to top,
			rgba(185, 153, 190, 0),
			rgb(185, 153, 190) 90%
		);
		height: 2.3em;
		z-index: 1;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		background-image: linear-gradient(
			to bottom,
			rgba(185, 153, 190, 0),
			rgb(185, 153, 190) 90%
		);
		height: 2.3em;
		z-index: 1;
	}
`;

const CaptionsContainer = styled.div`
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

interface CaptionsProps {
	captions: ICaption[];
	activeCaptionId: number | null;
	reactPlayerRef: RefObject<ReactPlayer>;
}

function Captions({
	captions,
	activeCaptionId,
	reactPlayerRef,
}: CaptionsProps) {
	const wrapperRef = useRef<HTMLInputElement>(null);

	const handleActiveCaptionChange = useCallback((activeCaption: any) => {
		const wrapper = wrapperRef?.current;
		if (activeCaption && wrapper) {
			const activeCaptionRect = activeCaption.getBoundingClientRect();
			// console.log(
			// 	`src/components/Transcript/Captions.tsx - 47 => activeCaptionRect: `,
			// 	'\n',
			// 	activeCaptionRect
			// );

			// wrapper.scrollTo(0, middle);
			// activeCaption.scrollIntoView()
		}
	}, []);

	return (
		<CaptionsWrapper ref={wrapperRef}>
			<CaptionsContainer>
				{captions.map(({ start, text, id }: ICaption, i: number) => {
					const isActive = activeCaptionId === id;
					return (
						<Caption
							key={i}
							isActive={isActive}
							captionRef={isActive ? handleActiveCaptionChange : null}
							onClick={() => {
								reactPlayerRef.current?.seekTo(start);
							}}
							text={text}
						/>
					);
				})}
			</CaptionsContainer>
		</CaptionsWrapper>
	);
}

export default React.memo(Captions);

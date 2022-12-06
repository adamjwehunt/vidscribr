import React, { RefObject, useCallback, useRef } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import { Caption } from '../../types';
import { CaptionText } from './CaptionText';
import { css } from '@emotion/react';

const CaptionsContainer = styled.div`
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

interface CaptionsProps {
	playerRef: RefObject<ReactPlayer>;
	className?: string;
	captions: Caption[];
	activeCaptionId: number | null;
}

export const Captions = React.memo(
	styled(
		({
			className,
			captions,
			activeCaptionId,
			playerRef,
		}: CaptionsProps) => {
			const wrapperRef = useRef<HTMLInputElement>(null);

			const handleActiveCaptionChange = useCallback((activeCaption: any) => {
				const wrapper = wrapperRef?.current;
				if (activeCaption && wrapper) {
					const activeCaptionRect = activeCaption.getBoundingClientRect();
					// wrapper.scrollTo(0, middle);
					// activeCaption.scrollIntoView()
				}
			}, []);

			const handleCaptionClick = (captionStart: number) =>
				playerRef.current?.seekTo(captionStart);

			return (
				<div ref={wrapperRef} className={className}>
					<CaptionsContainer>
						{captions.map(({ start, text, id }: Caption, i: number) => {
							const isActive = activeCaptionId === id;
							return (
								<CaptionText
									key={i}
									isActive={isActive}
									captionRef={isActive ? handleActiveCaptionChange : null}
									onClick={() => handleCaptionClick(start)}
									text={text}
								/>
							);
						})}
					</CaptionsContainer>
				</div>
			);
		}
	)(() => {
		const pseudoElementBase = (location: 'top' | 'bottom') => css`
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			${location}: 0;
			pointer-events: none;
			height: 2.3em;
			z-index: 1;
			background-image: linear-gradient(
				to ${location},
				rgba(185, 153, 190, 0),
				rgb(185, 153, 190) 90%
			);
		`;

		return css`
			position: relative;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 1em 0;
			background-color: rgb(185, 153, 190);

			&:before {
				${pseudoElementBase('top')};
			}

			&:after {
				${pseudoElementBase('bottom')};
			}
		`;
	})
);

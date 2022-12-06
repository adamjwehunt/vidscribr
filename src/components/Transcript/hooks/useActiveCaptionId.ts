import React, { useMemo } from 'react';
import { Caption } from '../../../types';

export default function useActiveCaptionId(
	captions: Caption[],
	played: number
): {
	activeCaptionId: number | null;
	handleAnimationStart: () => void;
	handleAnimationComplete: () => void;
} {
	// Prevents activeCaptionId from updating while animation is in progress
	const [isAnimating, setIsAnimating] = React.useState(false);
	const handleAnimationStart = () => setIsAnimating(true);
	const handleAnimationComplete = () => setIsAnimating(false);

	const previousActiveCaptionId = React.useRef<number | null>(null);

	const activeCaptionId = useMemo(() => {
		if (isAnimating) {
			return previousActiveCaptionId.current;
		}

		const id =
			captions.find(
				(
					{ start, duration }: { start: number; duration: number },
					i: number
				) => {
					return (
						played > start &&
						played < (captions[i + 1]?.start || start + duration)
					);
				}
			)?.id || null;

		previousActiveCaptionId.current = id;
		return id;
	}, [captions, played, isAnimating]);

	return { activeCaptionId, handleAnimationStart, handleAnimationComplete };
}

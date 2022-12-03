import React, { useMemo } from 'react';
import { Caption } from '../../../types';

export default function useActiveCaptionId(
	captions: Caption[],
	progress: number
): {
	activeCaptionId: number | null;
	setIsAnimating: (isAnimating: boolean) => void;
} {
	// Prevents activeCaptionId from updating while animation is in progress
	const [isAnimating, setIsAnimating] = React.useState(false);

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
						progress > start &&
						progress < (captions[i + 1]?.start || start + duration)
					);
				}
			)?.id || null;

		previousActiveCaptionId.current = id;
		return id;
	}, [captions, progress, isAnimating]);

	return { activeCaptionId, setIsAnimating };
}

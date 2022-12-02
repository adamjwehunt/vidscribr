import React, { ReactNode, useEffect, useState } from 'react';

export const DelayRender = ({
	children,
	seconds,
}: {
	children: ReactNode;
	seconds: number;
}) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsVisible(true);
		}, seconds * 1000);

		return () => clearTimeout(timeout);
	}, [isVisible]);

	return isVisible ? <>{children}</> : null;
};

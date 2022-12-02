import { useEffect, useState } from 'react';

export function useFetch(endpoint: string, options?: ResponseInit) {
	const [data, setData] = useState<any>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const { signal, abort } = new AbortController();

    const fetchData = async () => {
			await fetch(endpoint, { ...options, signal })
				.then((res) => setData(res.json()))
				.catch(setError)
				.finally(() => setIsLoading(false));
		};

		fetchData();

		return () => abort();
	}, []);

	return { isLoading, data, error };
}

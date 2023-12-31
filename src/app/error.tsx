'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-4 py-12" role="status">
			<h2>Something went wrong!</h2>
			<Button variant="outline" onClick={reset}>
				Try again
			</Button>
		</div>
	);
}

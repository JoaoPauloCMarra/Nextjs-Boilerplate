'use client';

import { useEffect } from 'react';
import { PageContainer } from '@/components/page-container';

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<PageContainer>
			<div className="flex flex-1 flex-col items-center justify-center" role="status">
				<h2>Something went wrong!</h2>
				<button
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					Try again
				</button>
			</div>
		</PageContainer>
	);
}

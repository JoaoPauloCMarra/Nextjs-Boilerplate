'use client';

import { useEffect } from 'react';
import { Button } from '@/components/primitives/button';
import useTranslations from '@/hooks/use-translations';

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const { t } = useTranslations();

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-4 py-12" role="status">
			<h1>{t('GlobalError.text')}</h1>
			<div className="pt-6">
				<Button variant="outline" onClick={() => reset()}>
					{t('GlobalError.cta')}
				</Button>
			</div>
		</div>
	);
}

'use client';

import { Button } from '@/components/primitives/button';
import useTranslations from '@/hooks/use-translations';

type Props = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
	const { t, locale } = useTranslations();
	console.error(error);

	return (
		<html lang={locale}>
			<body>
				<h1>{t('GlobalError.text')}</h1>
				<div className="pt-6">
					<Button variant="outline" onClick={() => reset()}>
						{t('GlobalError.cta')}
					</Button>
				</div>
			</body>
		</html>
	);
}

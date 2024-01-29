'use client';

import Link from 'next/link';
import useTranslations from '@/hooks/use-translations';

export default function NotFound() {
	const { t } = useTranslations();

	return (
		<div className="flex size-full flex-1 items-center justify-center py-12">
			<div className="text-center">
				<h1 className="text-2xl">{t('NotFoundPage.text')}</h1>
				<div className="pt-6">
					<Link href="/" className="underline">
						{t('NotFoundPage.cta')}
					</Link>
				</div>
			</div>
		</div>
	);
}

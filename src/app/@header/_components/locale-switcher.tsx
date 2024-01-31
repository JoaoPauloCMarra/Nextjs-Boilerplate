'use client';

import type { Locale } from '@/lib/constants';
import { Button } from '@/components/primitives/button';
import useTranslations from '@/hooks/use-translations';

const LocaleSwitcher = () => {
	const { locale, setLocale } = useTranslations();

	const onChange = async (selection: Locale) => {
		try {
			const response = await fetch(`/api/locale?locale=${selection}`, {});

			if (!response.ok) throw new Error('Failed to change locale');

			const json = await response.json();
			if (json.error) throw new Error(json.error);

			setLocale({ locale: selection, dictionary: json.dictionary || [] });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex w-full gap-4">
			<Button
				onClick={() => onChange('en')}
				variant={locale !== 'en' ? 'outline' : 'default'}
				size="sm"
			>
				English
			</Button>
			<Button
				onClick={() => onChange('pt')}
				variant={locale !== 'pt' ? 'outline' : 'default'}
				size="sm"
			>
				Português
			</Button>
		</div>
	);
};

export default LocaleSwitcher;

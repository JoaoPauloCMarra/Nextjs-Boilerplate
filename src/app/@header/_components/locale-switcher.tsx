'use client';

import type { Locale } from '@/lib/constants';
import { cn } from '@/lib/utils';
import useTranslations from '@/hooks/use-translations';

const OPTIONS = [
	{ label: 'English', value: 'en' },
	{ label: 'Português', value: 'pt' }
] satisfies { label: string; value: Locale }[];

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
		<div className="flex w-full gap-4 rounded-lg border bg-primary-foreground p-2">
			{OPTIONS.map((option) => (
				<button
					key={option.value}
					onClick={() => onChange(option.value)}
					className={cn('text-sm font-bold text-primary', locale !== option.value && 'text-muted')}
				>
					{option.label}
				</button>
			))}
		</div>
	);
};

export default LocaleSwitcher;

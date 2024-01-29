'use client';

import { type PropsWithChildren } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import type { Dictionary, Locale } from '@/lib/constants';
import { i18nAtom } from '@/lib/store';

type Props = PropsWithChildren & {
	locale: Locale;
	dictionary: Dictionary;
};

const AppHydrate = ({ children, locale, dictionary }: Props) => {
	useHydrateAtoms([[i18nAtom, { locale, dictionary }]]);

	return children;
};

export default AppHydrate;

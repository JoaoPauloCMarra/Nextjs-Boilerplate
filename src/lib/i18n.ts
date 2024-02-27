'use server';

import type { Locale } from './constants';

export const loadLocale = (locale: Locale) =>
	Promise.all([
		// Global Translations
		import(`@/translations/${locale}.json`).then((module) => module.default),
		// Main Nav Translations
		import(`@/app/_header/translations/${locale}.json`).then((module) => module.default)
	]).then((data) => data.reduce((prev, current) => ({ ...prev, ...current }), {}));

import type { Locale } from './constants';

const loadLocale = (locale: Locale) =>
	Promise.all([
		// Global Translations
		import(`@/translations/${locale}.json`).then((module) => module.default),
		// Main Nav Translations
		import(`@/app/@header/translations/${locale}.json`).then((module) => module.default)
	]).then((data) => data.reduce((prev, current) => ({ ...prev, ...current }), {}));

export const i18nDictionaries = {
	en: () => loadLocale('en'),
	pt: () => loadLocale('pt')
};

export const i18nDictionaries = {
	en: () => import('@/translations/en.json').then((module) => module.default),
	pt: () => import('@/translations/pt.json').then((module) => module.default)
};

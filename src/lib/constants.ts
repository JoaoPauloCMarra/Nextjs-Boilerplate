import type { Metadata } from 'next';

export const isDev = process.env.NODE_ENV === 'development';

export const APP_DOMAIN = isDev ? '.localhost' : '.joaopaulocmarra-ssr.vercel.app';

export const LOCALE_COOKIES_KEY = 'appLocale';
export const SUPPORTED_LOCALES = ['en', 'pt'] as const;
export const DEFAULT_LOCALE = 'en';
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type Dictionary = Record<string, Record<string, string>>;

export const APP_NAME = 'NextJS Boilerplate';
export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export const baseMetadata: Metadata = {
	title: APP_NAME,
	description: 'A boilerplate project with NextJS'
};

import { cookies } from 'next/headers';
import type { Locale } from '@/lib/constants';
import { APP_DOMAIN, DEFAULT_LOCALE, LOCALE_COOKIES_KEY } from '@/lib/constants';
import { loadLocale } from '@/lib/i18n';

export async function GET(request: Request): Promise<Response> {
	try {
		const { searchParams } = new URL(request.url);
		const locale = (searchParams.get('locale') ?? DEFAULT_LOCALE) as Locale;

		const oneDay = 24 * 60 * 60 * 1000;
		const oneYear = oneDay * 365;
		cookies().set(LOCALE_COOKIES_KEY, locale, {
			path: '/',
			expires: Date.now() + oneYear,
			domain: APP_DOMAIN
		});

		const dictionary = await loadLocale(locale);

		return Response.json({ dictionary, error: '' }, { status: 200 });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'An error occurred';
		return Response.json({ error: message }, { status: 503 });
	}
}

export type GetLocaleResponse = ReturnType<typeof GET>;

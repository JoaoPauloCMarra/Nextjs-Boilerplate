import { NextResponse, userAgent } from 'next/server';
import { DEFAULT_LOCALE, LOCALE_COOKIES_KEY } from './lib/constants';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const { isBot } = userAgent(request);
	if (isBot) {
		console.log('request from bot');
	}

	const cookiesLocale = request.cookies.get(LOCALE_COOKIES_KEY);
	if (!cookiesLocale) {
		const headerLocale = request.headers.get('accept-language');
		const locale = String(headerLocale ?? DEFAULT_LOCALE)
			.toLowerCase()
			.slice(0, 2);

		const response = NextResponse.redirect(request.url);
		response.cookies.set(LOCALE_COOKIES_KEY, locale);
		return response;
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - ignore prefetches (from next/link)
		 */
		{
			source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' }
			]
		}
	]
};

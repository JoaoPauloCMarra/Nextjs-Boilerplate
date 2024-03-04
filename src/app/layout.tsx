import './globals.css';

import type { PropsWithChildren } from 'react';
import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cookies } from 'next/headers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Provider as JotaiProvider } from 'jotai';
import type { Locale } from '@/lib/constants';
import { LOCALE_COOKIES_KEY, baseMetadata } from '@/lib/constants';
import { loadLocale } from '@/lib/i18n';
import AppHydrate from '@/components/app-hydrate';
import GlobalStateDebugger from '@/components/global-state-debugger';
import { Toaster } from '@/components/primitives/toaster';
import Header from './_header/default';
import ClientProviders from './client-providers';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap'
});

export const viewport: Viewport = {
	themeColor: 'black',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	viewportFit: 'cover',
	interactiveWidget: 'resizes-visual',
	colorScheme: 'dark'
};

export async function generateMetadata(): Promise<Metadata> {
	return baseMetadata;
}

export default async function RootLayout({ children }: PropsWithChildren) {
	const locale = cookies().get(LOCALE_COOKIES_KEY)?.value as Locale;
	const dictionary = await loadLocale(locale);

	return (
		<html lang={locale} className={fontSans.variable} suppressHydrationWarning>
			<body
				className="bg-background font-sans text-foreground antialiased"
				suppressHydrationWarning
			>
				<div className="relative flex flex-col">
					<JotaiProvider>
						<AppHydrate locale={locale} dictionary={dictionary}>
							<ClientProviders>
								<Header />
								<Suspense>{children}</Suspense>
								<GlobalStateDebugger isVisible />
								<Toaster />
							</ClientProviders>
						</AppHydrate>
					</JotaiProvider>
				</div>
				<SpeedInsights />
			</body>
		</html>
	);
}

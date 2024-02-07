import './globals.css';

import { Suspense, type ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Provider as JotaiProvider } from 'jotai';
import { Inter as FontSans } from 'next/font/google';
import { cookies } from 'next/headers';
import type { Locale } from '@/lib/constants';
import { LOCALE_COOKIES_KEY, baseMetadata } from '@/lib/constants';
import { loadLocale } from '@/lib/i18n';
import AppHydrate from '@/components/app-hydrate';
import GlobalStateDebugger from '@/components/global-state-debugger';
import { Toaster } from '@/components/primitives/toaster';
import ClientProviders from './client-providers';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap'
});

export function generateViewport() {
	const config: Viewport = {
		themeColor: 'black',
		width: 'device-width',
		initialScale: 1,
		maximumScale: 5,
		userScalable: true,
		viewportFit: 'cover',
		colorScheme: 'dark'
	};

	return config;
}

export const metadata: Metadata = baseMetadata;

type Props = {
	header: ReactNode;
	children: ReactNode;
};

export default async function RootLayout({ header, children }: Props) {
	const locale = cookies().get(LOCALE_COOKIES_KEY)?.value as Locale;
	const dictionary = await loadLocale(locale);

	return (
		<html lang={locale} className={fontSans.variable} suppressHydrationWarning>
			<body
				className="bg-background font-sans text-foreground antialiased"
				suppressHydrationWarning
			>
				<JotaiProvider>
					<AppHydrate locale={locale} dictionary={dictionary}>
						<ClientProviders>
							<div className="relative flex flex-col">
								<Suspense>{header}</Suspense>
								<Suspense>{children}</Suspense>
								<GlobalStateDebugger />
							</div>
							<Toaster />
						</ClientProviders>
					</AppHydrate>
				</JotaiProvider>
			</body>
		</html>
	);
}

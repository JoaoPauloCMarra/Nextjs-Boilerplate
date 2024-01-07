import './globals.css';

import type { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { Provider } from 'jotai';
import dynamic from 'next/dynamic';
import { Inter as FontSans } from 'next/font/google';
import { baseMetadata } from '@/lib/constants';
import GlobalStateDebugger from '@/components/global-state-debugger';
import MainNav from '@/components/main-nav';
import { Toaster } from '@/components/primitives/toaster';
import { SearchForm } from '@/features/search-form';

const BrandLogo = dynamic(() => import('@/components/brand-logo'));

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
		maximumScale: 1,
		viewportFit: 'cover',
		colorScheme: 'dark'
	};

	return config;
}

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={fontSans.variable} suppressHydrationWarning>
			<body
				className="min-h-screen bg-background font-sans text-foreground antialiased"
				suppressHydrationWarning
			>
				<Provider>
					<div className="relative flex min-h-screen flex-col">
						<div className="border-b">
							<div className="flex flex-col items-center justify-center p-4 md:h-16 md:flex-row md:py-0">
								<div className="mb-6 md:mb-0 md:mr-4">
									<BrandLogo className="size-12" />
								</div>
								<MainNav />
								<div className="ml-auto mt-6 flex w-full items-center md:mt-0 md:w-auto md:space-x-4">
									<SearchForm />
								</div>
							</div>
						</div>
						{children}
						<GlobalStateDebugger />
					</div>
					<Toaster />
				</Provider>
			</body>
		</html>
	);
}

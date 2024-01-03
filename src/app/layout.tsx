import './globals.css';

import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Provider } from 'jotai';
import dynamic from 'next/dynamic';
import { Inter as FontSans } from 'next/font/google';
import { baseMetadata } from '@/lib/constants';
import GlobalStateDebugger from '@/components/global-state-debugger';
import MainNav from '@/components/main-nav';
import { Toaster } from '@/components/primitives/toaster';
import { SearchForm } from '@/features/search-form';

const BrandLogo = dynamic(() =>
	import('@/components/brand-logo').then((module) => module.BrandLogo)
);

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap'
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={fontSans.variable}>
			<body
				className="min-h-screen bg-background font-sans text-foreground antialiased"
				suppressHydrationWarning
			>
				<Provider>
					<div className="relative flex min-h-screen flex-col bg-background">
						<div className="border-b">
							<div className="flex h-16 items-center px-4">
								<div className="mr-4">
									<BrandLogo size={22} />
								</div>
								<MainNav />
								<div className="ml-auto flex items-center space-x-4">
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

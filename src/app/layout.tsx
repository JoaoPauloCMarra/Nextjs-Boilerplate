import './globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Provider } from 'jotai';
import { Inter as FontSans } from 'next/font/google';
import { baseMetadata } from '@/lib/constants';
import { Toaster } from '@/components/ui/toaster';

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
					<div className="relative flex min-h-screen flex-col bg-background">{children}</div>
					<Toaster />
				</Provider>
			</body>
		</html>
	);
}

import './globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Provider } from 'jotai';
import { Inter as FontSans } from 'next/font/google';
import { baseMetadata } from '@/lib/constants';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap'
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={fontSans.variable}>
			<body>
				<Provider>
					<div className="relative flex min-h-screen flex-col bg-background">{children}</div>
				</Provider>
			</body>
		</html>
	);
}

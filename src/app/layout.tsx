import './globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Provider } from 'jotai';
import { Inter } from 'next/font/google';
import { baseMetadata } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<Provider>
					<div className="relative flex min-h-screen flex-col bg-background">{children}</div>
				</Provider>
			</body>
		</html>
	);
}

import './globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { baseMetadata } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<div className="relative flex min-h-screen flex-col bg-background">{children}</div>
			</body>
		</html>
	);
}

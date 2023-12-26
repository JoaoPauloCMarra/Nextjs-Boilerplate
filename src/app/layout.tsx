import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { baseMetadata } from '@/lib/constants';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
				<div className="relative flex min-h-screen flex-col bg-background">{children}</div>
			</body>
		</html>
	);
}

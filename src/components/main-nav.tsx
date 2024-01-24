'use client';

import type { HTMLAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MAIN_NAV_TESTIDS } from './main-nav.testids';

type Props = HTMLAttributes<HTMLElement>;

export const MENU_ITEMS = [
	{
		label: 'Overview',
		testID: MAIN_NAV_TESTIDS.overview,
		href: '/'
	},
	{
		label: 'Demo Form',
		testID: MAIN_NAV_TESTIDS.demoForm,
		href: '/demo-form'
	},
	{
		label: 'Demo Modal',
		testID: MAIN_NAV_TESTIDS.demoModal,
		href: '/demo-modal'
	},
	{
		label: 'Demo API',
		testID: MAIN_NAV_TESTIDS.demoApi,
		href: '/demo-api'
	},
	{
		label: 'Demo Board',
		testID: MAIN_NAV_TESTIDS.demoBoard,
		href: '/demo-board'
	}
] as const;

export default function MainNav({ className, ...props }: Props) {
	const pathname = usePathname();

	return (
		<nav
			className={cn(
				'flex flex-col items-center justify-center px-6 md:flex-row md:space-x-4 lg:space-x-6',
				className
			)}
			{...props}
		>
			{MENU_ITEMS.map(({ label, testID, href }) => (
				<Link
					key={label}
					href={href}
					prefetch
					aria-label={`Menu Item ${label}`}
					data-testid={testID}
					className={cn(
						'w-full py-2 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:w-auto md:py-0',
						pathname === href && 'text-primary'
					)}
				>
					{label}
				</Link>
			))}
		</nav>
	);
}

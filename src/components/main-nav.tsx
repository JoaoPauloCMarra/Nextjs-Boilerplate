'use client';

import type { HTMLAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Props = HTMLAttributes<HTMLElement>;

const MENU_ITEMS = [
	{
		label: 'Overview',
		href: '/'
	},
	{
		label: 'Demo Form',
		href: '/demo-form'
	},
	{
		label: 'Demo Modal',
		href: '/demo-modal'
	},
	{
		label: 'Demo API',
		href: '/demo-api'
	}
] as const;

export default function MainNav({ className, ...props }: Props) {
	const pathname = usePathname();

	return (
		<nav className={cn('mx-6 flex items-center space-x-4 lg:space-x-6', className)} {...props}>
			{MENU_ITEMS.map(({ label, href }) => (
				<Link
					key={label}
					href={href}
					prefetch
					aria-label={`Menu Item ${label}`}
					className={cn(
						'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
						pathname === href && 'text-primary'
					)}
				>
					{label}
				</Link>
			))}
		</nav>
	);
}

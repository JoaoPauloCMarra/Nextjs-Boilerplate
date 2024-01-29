'use client';

import { type HTMLAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import useTranslations from '@/hooks/use-translations';
import { MAIN_NAV_TESTIDS } from './test-ids';

type Props = HTMLAttributes<HTMLElement>;

export const MENU_ITEMS = [
	{
		labelKey: 'overview',
		testID: MAIN_NAV_TESTIDS.overview,
		href: '/'
	},
	{
		labelKey: 'demoForm',
		testID: MAIN_NAV_TESTIDS.demoForm,
		href: '/demo-form'
	},
	{
		labelKey: 'demoModal',
		testID: MAIN_NAV_TESTIDS.demoModal,
		href: '/demo-modal'
	},
	{
		labelKey: 'demoApi',
		testID: MAIN_NAV_TESTIDS.demoApi,
		href: '/demo-api'
	},
	{
		labelKey: 'demoBoard',
		testID: MAIN_NAV_TESTIDS.demoBoard,
		href: '/demo-board'
	}
] as const;

const MainNav = ({ className, ...props }: Props) => {
	const { t } = useTranslations();
	const pathname = usePathname();

	return (
		<nav
			className={cn(
				'flex flex-col items-center justify-center px-6 md:flex-row md:space-x-4 lg:space-x-6',
				className
			)}
			{...props}
		>
			{MENU_ITEMS.map(({ labelKey, testID, href }) => {
				const label = t(`MainMenu.${labelKey}`);
				return (
					<Link
						key={labelKey}
						href={href}
						aria-label={`Menu Item ${label}`}
						data-testid={testID}
						className={cn(
							'w-full py-2 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:w-auto md:py-0',
							pathname === href && 'text-primary'
						)}
					>
						{label}
					</Link>
				);
			})}
		</nav>
	);
};

export default MainNav;

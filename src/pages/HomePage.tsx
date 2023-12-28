'use client';

import dynamic from 'next/dynamic';
import { PageContainer } from '@/components/page-container';

const BrandLogo = dynamic(() =>
	import('@/components/brand-logo').then((module) => module.BrandLogo)
);
const UsernameForm = dynamic(() =>
	import('@/features/username-form').then((module) => module.UsernameForm)
);

export default function HomePage() {
	return (
		<PageContainer>
			<div className="flex w-full max-w-sm flex-col gap-4">
				<BrandLogo />
				<UsernameForm />
			</div>
		</PageContainer>
	);
}

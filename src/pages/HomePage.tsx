'use client';

import dynamic from 'next/dynamic';
import { PageContainer } from '@/components/page-container';

const BrandLogo = dynamic(() =>
	import('@/components/brand-logo').then((module) => module.BrandLogo)
);
const FormDemo = dynamic(() => import('@/components/form-demo').then((module) => module.FormDemo));

export default function HomePage() {
	return (
		<PageContainer>
			<div className="flex max-w-sm flex-col gap-4">
				<BrandLogo />
				<FormDemo />
			</div>
		</PageContainer>
	);
}

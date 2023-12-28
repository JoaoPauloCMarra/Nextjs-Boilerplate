'use client';

import { BrandLogo } from '@/components/brand-logo';
import { FormDemo } from '@/components/form-demo';
import { PageContainer } from '@/components/page-container';

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

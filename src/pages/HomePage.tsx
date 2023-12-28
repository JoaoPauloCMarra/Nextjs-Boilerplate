'use client';

import Logo from '@/components/Logo';
import PageContainer from '@/components/PageContainer';

export default function HomePage() {
	return (
		<PageContainer>
			<div className="flex max-w-sm flex-col gap-4">
				<Logo />
			</div>
		</PageContainer>
	);
}

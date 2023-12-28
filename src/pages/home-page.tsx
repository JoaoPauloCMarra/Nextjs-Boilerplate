'use client';

import { useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';
import { getUserInfoAtom } from '@/lib/store';
import { PageContainer } from '@/components/page-container';

const BrandLogo = dynamic(() =>
	import('@/components/brand-logo').then((module) => module.BrandLogo)
);
const UsernameForm = dynamic(() =>
	import('@/features/username-form').then((module) => module.UsernameForm)
);

export default function HomePage() {
	const userInfo = useAtomValue(getUserInfoAtom);

	return (
		<PageContainer>
			<div className="flex w-full max-w-sm flex-col gap-4">
				<BrandLogo />
				<UsernameForm />
			</div>
			<div className="mt-12 flex w-full max-w-sm flex-col items-center">
				<h4>Global State:</h4>
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(userInfo, null, 2)}</code>
				</pre>
			</div>
		</PageContainer>
	);
}

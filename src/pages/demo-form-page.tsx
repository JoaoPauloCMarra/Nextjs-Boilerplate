'use client';

import { useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';
import { getUserInfoAtom } from '@/lib/store';
import { PageContainer } from '@/components/page-container';

const UsernameForm = dynamic(() =>
	import('@/features/username-form').then((module) => module.UsernameForm)
);

export default function DemoFormPage() {
	const userInfo = useAtomValue(getUserInfoAtom);

	return (
		<PageContainer>
			<div className="flex w-full max-w-sm flex-col gap-4">
				<div className="flex w-full flex-col gap-4">
					<UsernameForm />
				</div>
				<div className="flex w-full flex-col items-center">
					<h4>Global State:</h4>
					<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4">
						<code className="text-white">{JSON.stringify(userInfo, null, 2)}</code>
					</pre>
				</div>
			</div>
		</PageContainer>
	);
}

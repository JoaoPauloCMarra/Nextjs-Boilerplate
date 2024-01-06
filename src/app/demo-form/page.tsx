import { Suspense } from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { baseMetadata } from '@/lib/constants';
import { usernameFormSubmit } from '@/app/actions/username';

const UsernameForm = dynamic(() =>
	import('@/features/username-form').then((module) => module.UsernameForm)
);

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Form - ${baseMetadata.title}`,
	description: ''
};

export default async function DemoForm() {
	return (
		<div className="container flex flex-1 flex-col items-center py-4 md:gap-4">
			<div className="flex w-full flex-col md:w-80 md:gap-4">
				<Suspense fallback={null}>
					<UsernameForm action={usernameFormSubmit} />
				</Suspense>
			</div>
		</div>
	);
}

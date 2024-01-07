import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { baseMetadata } from '@/lib/constants';
import { waitSeconds } from '@/lib/utils';
import { usernameFormSubmit } from '@/app/actions/username';
import UsernameFormSkeleton from '@/features/username-form/skeleton';

const UsernameForm = dynamic(
	async () => {
		await waitSeconds(2);
		return import('@/features/username-form').then((module) => module.UsernameForm);
	},
	{
		loading: () => {
			return <UsernameFormSkeleton />;
		}
	}
);

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Form - ${baseMetadata.title}`,
	description: ''
};

export default async function DemoForm() {
	await waitSeconds(2);
	return (
		<div className="container flex flex-1 flex-col items-center py-4 md:gap-4">
			<div className="flex w-full flex-col md:w-80 md:gap-4">
				<UsernameForm action={usernameFormSubmit} />
			</div>
		</div>
	);
}

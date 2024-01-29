import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { baseMetadata } from '@/lib/constants';
import { usernameFormSubmit } from '@/app/actions/username';
import UsernameFormSkeleton from './_components/skeleton';

const UsernameForm = dynamic(async () => import('./_components/form'), {
	loading: () => {
		return <UsernameFormSkeleton />;
	}
});

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Form - ${baseMetadata.title}`,
	description: ''
};

export default async function DemoForm() {
	return (
		<div className="container flex flex-1 flex-col items-center py-4 md:gap-4">
			<div className="flex w-full flex-col md:w-80 md:gap-4">
				<UsernameForm action={usernameFormSubmit} />
			</div>
		</div>
	);
}

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { baseMetadata } from '@/lib/constants';
import { waitSeconds } from '@/lib/utils';
import { InformationModalSkeleton } from '@/features/information-modal';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Form - ${baseMetadata.title}`,
	description: ''
};

const InformationModal = dynamic(
	async () => {
		await waitSeconds(2);
		return import('@/features/information-modal').then((module) => module.InformationModal);
	},
	{
		loading: () => {
			return <InformationModalSkeleton />;
		}
	}
);

export default async function DemoModal() {
	return (
		<div className="container flex flex-1 flex-col items-center py-4 md:gap-4">
			<div className="flex w-full flex-col md:w-80 md:gap-4">
				<InformationModal />
			</div>
		</div>
	);
}

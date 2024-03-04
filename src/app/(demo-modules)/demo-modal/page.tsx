import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { baseMetadata } from '@/lib/constants';
import DemoModalSkeleton from './_components/skeleton';

export async function generateMetadata(): Promise<Metadata> {
	const title = `Demo Modal - ${baseMetadata.title}`;
	const description = 'A demo modal';

	return {
		...baseMetadata,
		title,
		description
	};
}

const Modal = dynamic(async () => import('@/app/(demo-modules)/demo-modal/_components/modal'), {
	loading: () => {
		return <DemoModalSkeleton />;
	}
});

export default async function DemoModal() {
	return (
		<div className="container flex flex-1 flex-col items-center py-4 md:gap-4">
			<div className="flex w-full flex-col md:w-80 md:gap-4">
				<Modal />
			</div>
		</div>
	);
}

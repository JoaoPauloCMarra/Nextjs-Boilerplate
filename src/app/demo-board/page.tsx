import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/constants';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Board - ${baseMetadata.title}`,
	description: ''
};

export default async function DemoModal() {
	return (
		<div className="container flex flex-1 flex-col items-center py-4 md:gap-4">
			<p>WIP</p>
		</div>
	);
}

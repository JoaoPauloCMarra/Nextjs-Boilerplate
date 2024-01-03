import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/constants';
import { waitSeconds } from '@/lib/utils';
import DemoFormPage from '@/pages/demo-form-page';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Form - ${baseMetadata.title}`,
	description: ''
};

export default async function DemoForm() {
	await waitSeconds(1);

	return <DemoFormPage />;
}

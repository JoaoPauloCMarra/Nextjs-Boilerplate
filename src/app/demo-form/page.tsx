import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/constants';
import DemoFormPage from '@/pages/demo-form-page';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Form - ${baseMetadata.title}`,
	description: ''
};

export default function Home() {
	return <DemoFormPage />;
}

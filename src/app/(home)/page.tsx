import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/constants';
import HomePage from '@/pages/home-page';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Home - ${baseMetadata.title}`,
	description: ''
};

export default async function Home() {
	return <HomePage />;
}

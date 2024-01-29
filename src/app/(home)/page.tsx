import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/constants';
import HomeDemo from './_components/home-demo';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Home - ${baseMetadata.title}`,
	description: ''
};

export default async function Home() {
	return <HomeDemo />;
}

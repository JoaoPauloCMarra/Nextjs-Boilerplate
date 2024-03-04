import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/constants';
import HomeDemo from './_components/home-demo';

export async function generateMetadata(): Promise<Metadata> {
	const title = `Home - ${baseMetadata.title}`;
	const description = 'The home page of the app.';

	return {
		...baseMetadata,
		title,
		description
	};
}

export default async function Home() {
	return <HomeDemo />;
}

import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${BASE_URL}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: `${BASE_URL}/demo-form`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		}
	];
}

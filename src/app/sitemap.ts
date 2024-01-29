import type { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL;

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
		},
		{
			url: `${BASE_URL}/demo-modal`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${BASE_URL}/demo-api`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${BASE_URL}/demo-board`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		}
	];
}

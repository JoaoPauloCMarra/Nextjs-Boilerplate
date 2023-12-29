import type { Metadata } from 'next';

export const APP_NAME = 'NextJS Boilerplate';
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const baseMetadata: Metadata = {
	title: APP_NAME,
	description: 'A boilerplate project with NextJS'
};

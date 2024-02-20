import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { baseMetadata } from '@/lib/constants';
import DemoAPISkeleton from './_components/skeleton';

const ApiDemo = dynamic(() => import('./_components/api-demo'), {
	loading: () => {
		return <DemoAPISkeleton />;
	}
});

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo API - ${baseMetadata.title}`,
	description: ''
};

const DATA_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async (id?: number) => {
	'use server';

	let data = undefined;
	let errorMessage: string = '';

	if (!id) {
		return { data, errorMessage: 'id is required' };
	}

	const response = await fetch(`${DATA_URL}/${id}`);

	try {
		if (!response.ok) {
			errorMessage = `${response.status} - ${response.statusText}`;
		} else {
			data = await response.json();
		}
	} catch (error) {
		errorMessage = String(error);
	}

	return { data, errorMessage };
};

export default async function DemoExternalAPI() {
	let data = undefined;
	let errorMessage: string = '';

	try {
		const response = await fetchData(1);
		data = response.data;
	} catch (error) {
		errorMessage = String(error);
	}

	return (
		<ApiDemo
			url={DATA_URL}
			fetchData={fetchData}
			initialState={{
				data,
				errorMessage
			}}
		/>
	);
}

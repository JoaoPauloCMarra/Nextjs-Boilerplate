import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/constants';
import { waitSeconds } from '@/lib/utils';
import JSONViewer from '@/components/json-viewer';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Text - ${baseMetadata.title}`,
	description: ''
};

const DATA_URL = 'https://jsonplaceholder.typicode.com/users/1';

export default async function DemoExternalAPI() {
	let loading = true;
	let data = {};
	let errorMessage: string = '';

	const response = await fetch(DATA_URL);
	await waitSeconds(2);

	try {
		if (!response.ok) {
			errorMessage = `${response.status} - ${response.statusText}`;
		} else {
			data = await response.json();
		}
	} catch (error) {
		console.log(error);
		errorMessage = String(error);
	}

	loading = false;

	return (
		<div className="container flex w-full flex-1 flex-col items-center gap-4 py-4">
			<h2 className="text-2xl">Demo api response inside a RSC</h2>
			<p className="italic opacity-70">data from: {DATA_URL}</p>
			<div className="w-full max-w-sm overflow-x-auto rounded-xl bg-slate-700 p-1 md:p-4">
				{loading && <p>loading...</p>}
				{!loading && !errorMessage && data && <JSONViewer data={data} />}
				{!loading && errorMessage && <code className="text-sm text-red-500">{errorMessage}</code>}
			</div>
		</div>
	);
}

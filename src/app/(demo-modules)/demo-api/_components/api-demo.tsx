'use client';

import { useState } from 'react';
import JSONViewer from '@/components/json-viewer';
import LoadingIndicator from '@/components/loading-indicator';
import { Button } from '@/components/primitives/button';

type ResponseState = {
	data: unknown | Record<string, unknown>;
	errorMessage: string;
	loading?: boolean;
};

type Props = {
	url: string;
	initialState?: ResponseState;
	fetchData: (
		id?: number
	) => Promise<{ data: unknown | Record<string, unknown>; errorMessage: string }>;
};

const ApiDemo = (props: Props) => {
	const [{ data, errorMessage, loading }, setResponse] = useState<ResponseState>(
		props.initialState ?? {
			data: null,
			errorMessage: '',
			loading: false
		}
	);

	const onRefetch = async () => {
		setResponse((current) => ({ ...current, errorMessage: '', loading: true }));
		try {
			const response = await props.fetchData(Math.floor(Math.random() * 5) + 1);
			setResponse({ data: response, errorMessage: '', loading: false });
		} catch (error) {
			setResponse({ data: {}, errorMessage: String(error), loading: false });
		}
	};

	return (
		<div className="container flex w-full flex-1 flex-col items-center gap-4 py-4">
			<h2 className="text-2xl">Demo api response inside a RSC with 2s wait</h2>
			<p className="italic opacity-70">data from: {props.url}</p>
			<div className="w-full max-w-sm overflow-x-auto rounded-xl bg-slate-700 p-1 md:p-4">
				{!errorMessage && data ? <JSONViewer data={data} /> : null}
				{errorMessage ? <code className="text-sm text-red-500">{errorMessage}</code> : null}
			</div>
			<Button onClick={onRefetch} disabled={loading}>
				{loading ? <LoadingIndicator className="size-4 fill-black" /> : 'refetch with different id'}
			</Button>
		</div>
	);
};

export default ApiDemo;

'use client';

import { useRef } from 'react';
import { useSetAtom } from 'jotai';
import { BASE_URL } from '@/lib/constants';
import { setUserAtom } from '@/lib/store';
import { useToast } from '@/components/primitives/use-toast';
import type { FieldValues, UseFormReturn } from 'react-hook-form';

export function useUsernameForm<T extends FieldValues>(form: UseFormReturn<T, unknown, undefined>) {
	const abortControllerRef = useRef<AbortController>(new AbortController());
	const setUser = useSetAtom(setUserAtom);
	const { toast } = useToast();

	async function onSubmit(values: T) {
		try {
			const response = await fetch(`${BASE_URL}/api/username`, {
				method: 'POST',
				cache: 'no-cache',
				body: JSON.stringify(values),
				signal: abortControllerRef.current?.signal
			});

			const json = await response.json();

			if (!response.ok) {
				form.setError('root', {
					type: String(response.status),
					message: json.message ? json.message : `${response.status} - ${response.statusText}`
				});
				return;
			}

			setUser(json.data);

			toast({
				title: 'The server sent this back:',
				description: (
					<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4">
						<code className="text-white">{JSON.stringify(json, null, 2)}</code>
					</pre>
				)
			});
		} catch (error) {
			if (error instanceof Error && error.name === 'AbortError') {
				form.setError('root', {
					type: '500',
					message: 'request canceled'
				});
			} else {
				form.setError('root', {
					type: '500',
					message: String(error)
				});
			}
		} finally {
			abortControllerRef.current = new AbortController();
		}
	}

	const onReset = () => {
		form.reset();
	};

	const onCancel = () => {
		abortControllerRef.current?.abort();
	};

	return {
		onSubmit,
		onReset,
		onCancel
	};
}

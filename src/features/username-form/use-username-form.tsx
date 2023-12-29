'use client';

import { useSetAtom } from 'jotai';
import { BASE_URL } from '@/lib/constants';
import { setUserInfoAtom } from '@/lib/store';
import { useToast } from '@/components/ui/use-toast';
import type { FieldValues, UseFormReturn } from 'react-hook-form';

export function useUsernameForm<T extends FieldValues>(form: UseFormReturn<T, unknown, undefined>) {
	const setUserInfo = useSetAtom(setUserInfoAtom);
	const { toast } = useToast();

	async function onSubmit(values: T) {
		try {
			const response = await fetch(`${BASE_URL}/api/username`, {
				method: 'POST',
				cache: 'no-cache',
				body: JSON.stringify(values)
			});

			const json = await response.json();

			if (!response.ok) {
				form.setError('root', {
					type: String(response.status),
					message: json.message ? json.message : `${response.status} - ${response.statusText}`
				});
				return;
			}

			setUserInfo(json.data);

			toast({
				title: 'The server sent this back:',
				description: (
					<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4">
						<code className="text-white">{JSON.stringify(json, null, 2)}</code>
					</pre>
				)
			});
		} catch (error) {
			form.setError('root', {
				type: '500',
				message: String(error)
			});
		}
	}

	const onReset = () => {
		form.reset();
	};

	return {
		onSubmit,
		onReset
	};
}

'use client';

import { useSetAtom } from 'jotai';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { BASE_URL } from '@/lib/constants';
import { setUserInfoAtom } from '@/lib/store';
import { useToast } from '@/components/ui/use-toast';

export function useUsernameForm<T extends FieldValues>(form: UseFormReturn<T, unknown, undefined>) {
	const { toast } = useToast();
	const setUserInfo = useSetAtom(setUserInfoAtom);

	async function onSubmit(values: T) {
		const response = await fetch(`${BASE_URL}/api/username`, {
			method: 'POST',
			cache: 'no-cache',
			body: JSON.stringify(values)
		});

		if (!response.ok) {
			toast({
				title: 'The server sent this back:',
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						{response.status} - {response.statusText}
					</pre>
				)
			});
			return;
		}
		const json = await response.json();

		setUserInfo(json.data);

		toast({
			title: 'The server sent this back:',
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(json, null, 2)}</code>
				</pre>
			)
		});
	}

	const onReset = () => {
		form.reset();
	};

	return {
		onSubmit,
		onReset
	};
}

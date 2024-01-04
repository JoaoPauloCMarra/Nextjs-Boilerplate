'use client';

import { useRef, useTransition } from 'react';
import { useSetAtom } from 'jotai';
import { setUserAtom } from '@/lib/store';
import type { UsernameFormSubmit } from '@/app/actions/username';
import { useToast } from '@/components/primitives/use-toast';
import type { UsernameFormValues } from './utils';
import type { UseFormReturn } from 'react-hook-form';

export function useUsernameForm(
	form: UseFormReturn<UsernameFormValues, unknown, undefined>,
	action: UsernameFormSubmit
) {
	const abortControllerRef = useRef<AbortController>(new AbortController());
	const setUser = useSetAtom(setUserAtom);
	const [isPending, startTransition] = useTransition();
	const { toast } = useToast();

	async function onSubmit(data: UsernameFormValues) {
		startTransition(async () => {
			try {
				const result = await action({ data });

				if (result.data) {
					setUser(result.data);
					toast({
						title: 'The server sent this back:',
						description: (
							<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4">
								<code className="text-white">{JSON.stringify(result, null, 2)}</code>
							</pre>
						)
					});
				} else {
					form.setError('root', {
						type: String(result.status),
						message: result.message
					});
				}
			} catch (error) {
				form.setError('root', {
					type: '500',
					message: String(error)
				});
			}
		});
	}

	const onReset = () => {
		form.reset();
	};

	const onCancel = () => {
		abortControllerRef.current?.abort();
	};

	return {
		isPending,

		onSubmit,
		onReset,
		onCancel
	};
}

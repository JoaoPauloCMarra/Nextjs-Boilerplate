'use client';

import { useRef, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSetAtom } from 'jotai';
import { useAtomValue } from 'jotai';
import { useForm } from 'react-hook-form';
import { setUserAtom } from '@/lib/store';
import { getUserAtom } from '@/lib/store';
import type { UsernameFormSubmit } from '@/app/actions/username';
import { useToast } from '@/components/primitives/use-toast';
import { usernameFormSchema } from '../utils';
import type { UsernameFormValues } from '../utils';

export type UseUsernameFormProps = {
	action: UsernameFormSubmit;
	defaultValues?: UsernameFormValues;
};

export default function useUsernameForm(props: UseUsernameFormProps) {
	const abortControllerRef = useRef<AbortController>(new AbortController());
	const [isSubimitting, startTransition] = useTransition();
	const setUser = useSetAtom(setUserAtom);
	const userInfo = useAtomValue(getUserAtom);
	const form = useForm<UsernameFormValues>({
		resolver: zodResolver(usernameFormSchema),
		defaultValues: props.defaultValues || userInfo
	});
	const { toast } = useToast();

	const onSubmit = async (data: UsernameFormValues) => {
		startTransition(async () => {
			try {
				const result = await props.action({ data });

				if (result.data) {
					setUser(result.data);
					form.reset(data);
					toast({
						description: `Your new username is "${result.data.username}"`,
						variant: 'successful'
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
	};

	const onReset = () => {
		form.reset();
	};

	const onCancel = () => {
		abortControllerRef.current.abort();
	};

	return {
		form,
		isSubimitting,

		onSubmit,
		onReset,
		onCancel
	};
}

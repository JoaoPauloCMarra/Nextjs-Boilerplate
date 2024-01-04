'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAtomValue } from 'jotai';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { getUserAtom } from '@/lib/store';
import type { UsernameFormSubmit } from '@/app/actions/username';
import { Button } from '@/components/primitives/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/primitives/form';
import { Input } from '@/components/primitives/input';
import { USERNAME_FORM_TESTIDS } from './test-ids';
import { useUsernameForm } from './use-username-form';
import type { UsernameFormValues } from './utils';
import { formSchema } from './utils';

type Props = {
	action: UsernameFormSubmit;
	defaultValues?: UsernameFormValues;
};

export const UsernameForm = (props: Props) => {
	const userInfo = useAtomValue(getUserAtom);
	const form = useForm<UsernameFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: props.defaultValues || userInfo
	});
	const { isPending, onSubmit, onReset, onCancel } = useUsernameForm(form, props.action);

	const { formState } = form;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									{...field}
									data-testid={USERNAME_FORM_TESTIDS.inputUsername}
									placeholder="your desired username"
									className="lowercase"
									inputMode="text"
									disabled={isPending}
									readOnly={isPending}
								/>
							</FormControl>
							<FormDescription>{`try 'user' or 'error'.`}</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{formState.errors.root?.message && (
					<div
						className="rounded-md bg-destructive px-4 py-2 text-sm text-destructive-foreground"
						role="alert"
					>
						<span>{formState.errors.root?.message}</span>
					</div>
				)}
				<div className="flex w-full justify-between">
					<Button
						type="reset"
						variant="ghost"
						onClick={onReset}
						data-testid={USERNAME_FORM_TESTIDS.buttonClear}
						disabled={!formState.isDirty || isPending}
					>
						Clear
					</Button>
					<Button
						onClick={isPending ? onCancel : undefined}
						type={isPending ? 'button' : 'submit'}
						variant="default"
						data-testid={USERNAME_FORM_TESTIDS.buttonSubmit}
						disabled={!formState.isValid}
					>
						{isPending ? 'Cancel' : 'Submit'}
						{isPending && (
							<div className="ml-2 animate-spin" role="status">
								<Loader2 size={16} />
							</div>
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

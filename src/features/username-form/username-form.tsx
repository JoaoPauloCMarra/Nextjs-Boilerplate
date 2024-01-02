'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAtomValue } from 'jotai';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { getUserAtom } from '@/lib/store';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { USERNAME_FORM_TESTIDS } from './test-ids';
import { useUsernameForm } from './use-username-form';

const formSchema = z.object({
	username: z.string().toLowerCase().min(2, {
		message: 'Username must be at least 2 characters.'
	})
});

export type UsernameFormValues = z.infer<typeof formSchema>;

type Props = {
	defaultValues?: UsernameFormValues;
};

export const UsernameForm = ({ defaultValues }: Props) => {
	const userInfo = useAtomValue(getUserAtom);
	const form = useForm<UsernameFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValues || userInfo
	});
	const { onSubmit, onReset, onCancel } = useUsernameForm<UsernameFormValues>(form);

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
									disabled={formState.isSubmitting}
									readOnly={formState.isSubmitting}
								/>
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
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
						disabled={!formState.isDirty || formState.isSubmitting}
					>
						Clear
					</Button>
					<Button
						onClick={formState.isSubmitting ? onCancel : undefined}
						type={formState.isSubmitting ? 'button' : 'submit'}
						variant="default"
						data-testid={USERNAME_FORM_TESTIDS.buttonSubmit}
						disabled={!formState.isValid}
					>
						{formState.isSubmitting ? 'Cancel' : 'Submit'}
						{formState.isSubmitting && (
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

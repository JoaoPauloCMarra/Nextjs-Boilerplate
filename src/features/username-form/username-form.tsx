'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
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
import { useUsernameForm } from '@/features/username-form';
import { USERNAME_FORM_TESTIDS } from './test-ids';

const formSchema = z.object({
	username: z.string().toLowerCase().min(2, {
		message: 'Username must be at least 2 characters.'
	})
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
	defaultValues?: FormValues;
};

export const UsernameForm = ({ defaultValues }: Props) => {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValues || {
			username: ''
		}
	});

	const { onSubmit, onReset } = useUsernameForm<FormValues>(form);

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
									disabled={form.formState.isSubmitting}
									readOnly={form.formState.isSubmitting}
								/>
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex w-full justify-between">
					<Button
						type="reset"
						variant="ghost"
						onClick={onReset}
						data-testid={USERNAME_FORM_TESTIDS.buttonClear}
						disabled={!form.formState.isDirty || form.formState.isSubmitting}
					>
						Clear
					</Button>
					<Button
						type="submit"
						variant="default"
						data-testid={USERNAME_FORM_TESTIDS.buttonSubmit}
						disabled={!form.formState.isValid || form.formState.isSubmitting}
					>
						Submit
					</Button>
				</div>
			</form>
		</Form>
	);
};

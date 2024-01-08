'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
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
import type { UseUsernameFormProps } from './use-username-form';
import useUsernameForm from './use-username-form';

const Loader2 = dynamic(() => import('lucide-react').then((module) => module.Loader2));

export default function UsernameForm(props: UseUsernameFormProps) {
	const { form, isSubimitting, onSubmit, onReset, onCancel } = useUsernameForm(props);
	const {
		formState: { errors, isDirty, isValid }
	} = form;

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
									disabled={isSubimitting}
									readOnly={isSubimitting}
								/>
							</FormControl>
							<FormDescription>{`try 'user' or 'error'.`}</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{errors.root?.message && (
					<div
						className="rounded-md bg-destructive px-4 py-2 text-sm text-destructive-foreground"
						role="alert"
					>
						<span>{errors.root?.message}</span>
					</div>
				)}
				<div className="flex w-full justify-between">
					<Button
						type="reset"
						variant="ghost"
						onClick={onReset}
						data-testid={USERNAME_FORM_TESTIDS.buttonClear}
						disabled={!isDirty || isSubimitting}
					>
						Clear
					</Button>
					<Button
						onClick={isSubimitting ? onCancel : undefined}
						type={isSubimitting ? 'button' : 'submit'}
						variant="default"
						data-testid={USERNAME_FORM_TESTIDS.buttonSubmit}
						disabled={!isValid || !isDirty}
					>
						{isSubimitting ? 'Cancel' : 'Submit'}
						<Suspense fallback={null}>
							<Loader2
								size={16}
								role="status"
								className={cn('ml-1 animate-spin', isSubimitting ? 'inline-block' : 'hidden')}
							/>
						</Suspense>
					</Button>
				</div>
			</form>
		</Form>
	);
}

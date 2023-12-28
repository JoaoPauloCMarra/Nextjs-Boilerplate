'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ToastAction } from '@radix-ui/react-toast';
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
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
	username: z.string().toLowerCase().min(2, {
		message: 'Username must be at least 2 characters.'
	})
});

type FormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<FormValues> = {
	username: ''
};

export const FormDemo = () => {
	const { toast } = useToast();
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues
	});

	function onSubmit(values: FormValues) {
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(values, null, 2)}</code>
				</pre>
			),
			action: <ToastAction altText="Close">Close</ToastAction>
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									placeholder="your desired username"
									className="lowercase"
									inputMode="text"
									{...field}
								/>
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="reset" variant="ghost" onClick={() => form.reset()}>
					Clear
				</Button>
				<Button type="submit" variant="default">
					Submit
				</Button>
			</form>
		</Form>
	);
};

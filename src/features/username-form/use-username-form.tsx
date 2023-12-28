import { FieldValues, UseFormReturn } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';

export function useUsernameForm<T extends FieldValues>(form: UseFormReturn<T, unknown, undefined>) {
	const { toast } = useToast();

	function onSubmit(values: T) {
		// TODO: server action implementation
		const serverResponse = { values };

		toast({
			title: 'The server sent this back:',
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(serverResponse, null, 2)}</code>
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

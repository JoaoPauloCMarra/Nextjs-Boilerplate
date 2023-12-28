import { useSetAtom } from 'jotai';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { setUserInfoAtom } from '@/lib/store';
import { useToast } from '@/components/ui/use-toast';
import { submitUsername } from './actions';

export function useUsernameForm<T extends FieldValues>(form: UseFormReturn<T, unknown, undefined>) {
	const { toast } = useToast();
	const setUserInfo = useSetAtom(setUserInfoAtom);

	async function onSubmit(values: T) {
		const serverResponse = await submitUsername(values);
		setUserInfo(serverResponse.data);

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

import { useRef, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { setTodoColumns } from '@/lib/store';
import type { BoardColumnSubmit } from '@/app/actions/board';
import type { TodoBoardColumnFormValues } from './utils';
import { todoBoardColumnFormSchema } from './utils';

export type TodoColumnFormProps = {
	totalColumns: number;
	action: BoardColumnSubmit;
};

export default function useTodoBoardColumn(props: TodoColumnFormProps) {
	const [isSubimitting, startTransition] = useTransition();
	const addColumn = useSetAtom(setTodoColumns);
	const refs = {
		name: useRef<HTMLInputElement>(null)
	};
	const form = useForm<TodoBoardColumnFormValues>({
		resolver: zodResolver(todoBoardColumnFormSchema),
		defaultValues: {
			index: 0,
			name: ''
		}
	});

	const formAction = async (formData: FormData) => {
		startTransition(async () => {
			try {
				const data = Object.fromEntries(formData.entries()) as unknown as TodoBoardColumnFormValues;

				if (data.name === 'error') {
					throw 'test error';
				}

				const nextColumn = {
					index: props.totalColumns + 1,
					name: data.name
				};
				await props.action({
					data: nextColumn
				});
				addColumn(nextColumn);
				setTimeout(() => {
					form.reset();
					refs.name.current?.focus();
				}, 100);
			} catch (error) {
				console.log(error);
				form.setError('name', {
					message: String(error)
				});
			}
		});
	};

	return {
		form,
		isSubimitting,
		refs,

		formAction
	};
}

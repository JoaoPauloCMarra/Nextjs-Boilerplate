import type { FormEventHandler } from 'react';
import { useRef, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { addTodoColumnsAtom } from '@/lib/store';
import type { BoardColumnSubmit } from '@/app/actions/board';
import type { TodoBoardColumnFormValues } from './utils';
import { todoBoardColumnFormSchema } from './utils';

export type TodoColumnFormProps = {
	totalColumns: number;
	action: BoardColumnSubmit;
	onSubmit?: FormEventHandler;
};

export default function useTodoBoardColumn(props: TodoColumnFormProps) {
	const [isSubimitting, startTransition] = useTransition();
	const addColumn = useSetAtom(addTodoColumnsAtom);
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
				const nextColumn = {
					index: props.totalColumns + 1,
					name: data.name
				};
				const response = await props.action({
					data: nextColumn
				});
				if (response.status !== 200) {
					form.setError('name', {
						message: response.message
					});
					return;
				}
				addColumn(nextColumn);
			} catch (error) {
				form.setError('root', {
					message: String(error)
				});
			} finally {
				form.reset();
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

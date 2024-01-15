'use client';

import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import { getTodoColumns } from '@/lib/store';
import type { BoardColumnSubmit } from '@/app/actions/board';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/primitives/form';
import { Input } from '@/components/primitives/input';
import type { TodoColumnFormProps } from './use-todo-board';
import useTodoBoardColumn from './use-todo-board';

type Props = {
	createColumnAction: BoardColumnSubmit;
};

export default function TodoBoard(props: Props) {
	const columns = useAtomValue(getTodoColumns);

	return (
		<div className="flex w-full flex-col overflow-hidden">
			<div className="pb-8">
				<h1 className="text-2xl font-bold">Demo Todo Board</h1>
			</div>
			<div className="grid auto-cols-max grid-flow-col gap-2 overflow-auto">
				{columns.map((column) => (
					<motion.div
						key={`${column.index}-${column.name}`}
						className="w-[320px] rounded-md bg-slate-900 p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.25, ease: 'easeOut' }}
					>
						<div className="mb-4">
							<p className="text-xl">{column.name}</p>
						</div>
						<span className="text-sm">WIP: items</span>
					</motion.div>
				))}
				<div className="w-[320px] rounded-md bg-slate-900 p-4">
					<TodoColumnForm totalColumns={columns.length} action={props.createColumnAction} />
				</div>
			</div>
		</div>
	);
}

function TodoColumnForm(props: TodoColumnFormProps) {
	const { form, isSubimitting, refs, formAction } = useTodoBoardColumn(props);
	const {
		formState: { errors }
	} = form;

	return (
		<Form {...form}>
			<form action={formAction}>
				<FormField
					control={form.control}
					name="name"
					render={({ field, fieldState }) => (
						<FormItem>
							<FormControl>
								<Input
									{...field}
									ref={refs.name}
									placeholder="name this column"
									inputMode="text"
									disabled={isSubimitting}
									readOnly={isSubimitting}
									autoCapitalize="off"
									autoComplete="off"
									autoCorrect="off"
									className={fieldState.error && 'border-destructive text-destructive'}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{errors.root?.message && (
					<div
						className="mt-1 rounded-md bg-destructive px-4 py-2 text-sm text-destructive-foreground"
						role="alert"
					>
						<span>{errors.root?.message}</span>
					</div>
				)}
			</form>
		</Form>
	);
}

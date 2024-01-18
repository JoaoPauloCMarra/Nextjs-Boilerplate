'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useAtomValue, useSetAtom } from 'jotai';
import dynamic from 'next/dynamic';
import { deleteTodoColumnAtom, getTodoColumnsAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import type { BoardColumnSubmit } from '@/app/actions/board';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/primitives/dropdown-menu';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/primitives/form';
import { Input } from '@/components/primitives/input';
import type { TodoColumnFormProps } from './use-todo-board';
import useTodoBoardColumn from './use-todo-board';

type Props = {
	createColumnAction: BoardColumnSubmit;
};

const OptionsIcon = dynamic(() => import('lucide-react').then((module) => module.MoreVertical));
const PlusIcon = dynamic(() => import('lucide-react').then((module) => module.PlusCircleIcon));
const CloseIcon = dynamic(() => import('lucide-react').then((module) => module.MinusCircleIcon));

export default function TodoBoard(props: Props) {
	const columns = useAtomValue(getTodoColumnsAtom);
	const deleteTodo = useSetAtom(deleteTodoColumnAtom);
	const boardContainerRef = useRef<HTMLDivElement>(null);
	const [isTodoColumnFormVisible, setTodoColumnFormVisible] = useState(false);

	const onColumnFormShow = () => {
		setTodoColumnFormVisible(true);
	};

	const onColumnFormHide = () => {
		setTodoColumnFormVisible(false);
	};

	const onColumnDelete = (index: number) => {
		deleteTodo(index);
	};

	useEffect(() => {
		if (!boardContainerRef.current || !columns.length) return;
		setTimeout(() => {
			boardContainerRef.current?.lastElementChild?.scrollIntoView({
				behavior: 'smooth',
				inline: 'nearest'
			});
		}, 100);
	}, [isTodoColumnFormVisible, columns.length]);

	return (
		<div className="flex w-full flex-col overflow-hidden">
			<div className="flex items-center gap-2 pb-8">
				<h1 className="text-2xl font-bold">Demo Todo Board</h1>
				{!isTodoColumnFormVisible && (
					<div className="text-white">
						<PlusIcon className="size-6" onClick={onColumnFormShow} />
					</div>
				)}
			</div>
			<div
				className="scrollbar-hide grid auto-cols-max grid-flow-col gap-2 overflow-x-auto overflow-y-visible"
				ref={boardContainerRef}
			>
				{columns.map((column) => (
					<motion.div
						key={`${column.index}-${column.name}`}
						className="w-[320px] rounded-md bg-slate-900 p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.15, ease: 'easeIn' }}
					>
						<div className="flex w-full justify-between pb-4">
							<p
								className="cursor-default select-none truncate text-xl font-bold"
								title={column.name}
							>
								{column.name}
							</p>
							<DropdownMenu>
								<DropdownMenuTrigger>
									<OptionsIcon className="size-4" />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>Options</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem onClick={() => onColumnDelete(column.index)}>
										Delete Column
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div className="w-full">
							<TodoItemsForm />
						</div>
					</motion.div>
				))}
				<div
					className={cn(
						'invisible relative flex w-0 flex-col gap-4 rounded-md bg-slate-900',
						isTodoColumnFormVisible && 'visible w-[320px] p-4'
					)}
				>
					<motion.div
						animate={isTodoColumnFormVisible && { opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.15, ease: 'easeIn' }}
					>
						<TodoColumnForm
							totalColumns={columns.length}
							action={props.createColumnAction}
							onSubmit={() => setTodoColumnFormVisible(false)}
						/>
					</motion.div>
					<div className="absolute left-1 top-1 text-white">
						<CloseIcon className="size-6" onClick={onColumnFormHide} />
					</div>
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
			<form action={formAction} onSubmit={props.onSubmit} className="p-4">
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
						<span>{errors.root.message}</span>
					</div>
				)}
			</form>
		</Form>
	);
}

function TodoItemsForm() {
	return <p>Form to add items WIP</p>;
}

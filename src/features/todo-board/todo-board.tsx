'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';
import { getTodoColumns } from '@/lib/store';
import { cn } from '@/lib/utils';
import type { BoardColumnSubmit } from '@/app/actions/board';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/primitives/form';
import { Input } from '@/components/primitives/input';
import type { TodoColumnFormProps } from './use-todo-board';
import useTodoBoardColumn from './use-todo-board';

type Props = {
	createColumnAction: BoardColumnSubmit;
};

const PlusIcon = dynamic(() => import('lucide-react').then((module) => module.PlusCircleIcon));
const CloseIcon = dynamic(() => import('lucide-react').then((module) => module.MinusCircleIcon));

export default function TodoBoard(props: Props) {
	const columns = useAtomValue(getTodoColumns);
	const [isTodoColumnFormVisible, setTodoColumnFormVisible] = useState(false);
	const boardContainerRef = useRef<HTMLDivElement>(null);

	const onColumnFormShow = () => {
		setTodoColumnFormVisible(true);
	};

	const onColumnFormHide = () => {
		setTodoColumnFormVisible(false);
	};

	useEffect(() => {
		if (!boardContainerRef.current) return;
		setTimeout(() => {
			boardContainerRef.current?.lastElementChild?.scrollIntoView({
				behavior: 'smooth',
				inline: 'nearest'
			});
		}, 100);
	}, [isTodoColumnFormVisible]);

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
				className="scrollbar-hide grid auto-cols-max grid-flow-col gap-2 overflow-auto"
				ref={boardContainerRef}
			>
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
				<div
					className={cn(
						'invisible relative flex w-0 flex-col gap-4 rounded-md bg-slate-900',
						isTodoColumnFormVisible && 'visible w-[320px] p-4'
					)}
				>
					<motion.div animate={isTodoColumnFormVisible && { opacity: 1 }} initial={{ opacity: 0 }}>
						<TodoColumnForm
							totalColumns={columns.length}
							action={props.createColumnAction}
							onSubmit={() => setTodoColumnFormVisible(false)}
						/>
					</motion.div>
					<div className="absolute left-0 top-0 text-white">
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
			<form action={formAction} onSubmit={props.onSubmit}>
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

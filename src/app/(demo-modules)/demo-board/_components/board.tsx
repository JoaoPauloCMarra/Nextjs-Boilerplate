'use client';

import { motion } from 'framer-motion';
import { PlusCircleIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
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
import TodoColumnForm from './todo-column-form';
import TodoItemsForm from './todo-items-form';
import useTodoBoard from '../_hooks/use-todo-board';
import { DEMO_BOARD_TESTIDS } from '../test-ids';

type Props = {
	createColumnAction: BoardColumnSubmit;
};

const OptionsIcon = dynamic(() => import('lucide-react').then((module) => module.MoreVertical));
const CloseIcon = dynamic(() => import('lucide-react').then((module) => module.MinusCircleIcon));

const TodoBoard = (props: Props) => {
	const {
		columns,
		isTodoColumnFormVisible,
		boardContainerRef,
		onColumnDelete,
		onColumnFormHide,
		onColumnFormShow
	} = useTodoBoard();

	return (
		<div className="flex w-full flex-col overflow-hidden">
			<div className="flex items-center gap-2 pb-8">
				<h1 className="text-2xl font-bold">Demo Todo Board</h1>
				{!isTodoColumnFormVisible && (
					<div className="text-white">
						<PlusCircleIcon
							className="size-6"
							onClick={onColumnFormShow}
							data-testid={DEMO_BOARD_TESTIDS.addColumnButton}
						/>
					</div>
				)}
			</div>
			<div
				className="scrollbar-hide grid auto-cols-max grid-flow-col gap-2 overflow-x-auto overflow-y-visible"
				ref={boardContainerRef}
			>
				{columns.map((column) => {
					const key = `column-${column.index}-${column.name}`.toLowerCase();
					return (
						<motion.div
							key={key}
							className="w-[320px] rounded-md bg-slate-900 p-4"
							initial={{ opacity: 0.5 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.15, ease: 'linear' }}
							data-testid={key}
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
					);
				})}
				<div
					className={cn(
						'invisible relative flex w-0 flex-col gap-4 rounded-md bg-slate-900',
						isTodoColumnFormVisible && 'visible w-[320px] p-4'
					)}
				>
					<motion.div
						animate={isTodoColumnFormVisible && { opacity: 1 }}
						initial={{ opacity: 0.5 }}
						transition={{ duration: 0.15, ease: 'linear' }}
					>
						<TodoColumnForm
							totalColumns={columns.length}
							action={props.createColumnAction}
							onSubmit={onColumnFormHide}
						/>
					</motion.div>
					<div className="absolute left-1 top-1 text-white">
						<CloseIcon className="size-6" onClick={onColumnFormHide} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoBoard;

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import { ArrowUp, X } from 'lucide-react';
import { getSearchTermAtom, getTodoColumnsAtom, getUserAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import type { Variants } from 'framer-motion';

const windowVariant: Variants = {
	hide: {
		translateY: '100vh',
		zIndex: '-1',
		opacity: 0
	},
	show: {
		translateY: 0,
		zIndex: 1,
		opacity: 1
	}
};

type Props = {
	isVisible?: boolean;
};

export default function GlobalStateDebugger({ isVisible }: Props) {
	const userInfo = useAtomValue(getUserAtom);
	const searchTerm = useAtomValue(getSearchTermAtom);
	const boardColumns = useAtomValue(getTodoColumnsAtom);
	const [visible, setVisible] = useState(isVisible);

	return (
		<>
			{!visible && (
				<div className="fixed bottom-2 right-2 z-10 rounded-full bg-slate-700 p-2 opacity-90">
					<ArrowUp className="size-4" onClick={() => setVisible(true)} />
				</div>
			)}
			<div
				className={cn(
					'fixed bottom-2 z-10 flex w-full flex-col items-center opacity-90',
					!visible && 'pointer-events-none'
				)}
			>
				<motion.div
					variants={windowVariant}
					transition={{ duration: 0.25, ease: 'easeInOut', delay: 0.2 }}
					initial="show"
					animate={visible ? 'show' : 'hide'}
					className="rounded-lg bg-slate-700 px-2 py-4 shadow-md"
				>
					<div className="flex w-full items-center justify-between">
						<p className="text-base font-bold">Global State:</p>
						<X className="size-4" onClick={() => setVisible(false)} />
					</div>
					<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4 text-xs">
						<code className="text-white">
							<b>number of board columns:</b> {boardColumns.length || <i>0</i>}
						</code>
					</pre>
					<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4 text-xs">
						<code className="text-white">
							<b>searchTerm:</b> {searchTerm || <i>empty</i>}
						</code>
					</pre>
					<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4 text-xs">
						<code className="text-white">{JSON.stringify(userInfo, null, 2)}</code>
					</pre>
				</motion.div>
			</div>
		</>
	);
}

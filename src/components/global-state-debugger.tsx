'use client';

import { useAtomValue } from 'jotai';
import { getSearchTermAtom, getUserAtom } from '@/lib/store';

export default function GlobalStateDebugger() {
	const userInfo = useAtomValue(getUserAtom);
	const searchTerm = useAtomValue(getSearchTermAtom);

	return (
		<div className="fixed bottom-2 flex w-full flex-col items-center opacity-90">
			<div className="rounded-lg bg-slate-700 px-2 py-4 shadow-md">
				<h4 className="text-base font-bold">Global State:</h4>
				<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4 text-xs">
					<code className="text-white">
						<b>searchTerm:</b> {searchTerm || <i>empty</i>}
					</code>
				</pre>
				<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4 text-xs">
					<code className="text-white">{JSON.stringify(userInfo, null, 2)}</code>
				</pre>
			</div>
		</div>
	);
}

'use client';

import { useAtomValue } from 'jotai';
import { getSearchTermAtom, getUserAtom } from '@/lib/store';

export default function GlobalStateDebugger() {
	const userInfo = useAtomValue(getUserAtom);
	const searchTerm = useAtomValue(getSearchTermAtom);

	return (
		<div className="flex w-full flex-col items-center">
			<h4>Global State:</h4>
			<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4">
				<code className="text-white">{JSON.stringify(userInfo, null, 2)}</code>
			</pre>
			<pre className="mt-2 w-[340px] max-w-full rounded-md bg-slate-950 p-4">
				<code className="text-white">searchTerm: {searchTerm}</code>
			</pre>
		</div>
	);
}

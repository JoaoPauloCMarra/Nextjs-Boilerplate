import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { baseMetadata } from '@/lib/constants';
import { boardColumnSubmit } from '@/app/actions/board';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Demo Board - ${baseMetadata.title}`,
	description: ''
};

const TodoBoard = dynamic(async () => import('./_components/board'), {
	loading: () => {
		return null;
		// WIP: return <TodoBoardSkeleton />;
	}
});

export default async function DemoModal() {
	return (
		<div className="flex flex-1 flex-col items-center p-4 md:gap-4">
			<TodoBoard createColumnAction={boardColumnSubmit} />
		</div>
	);
}

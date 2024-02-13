import { Skeleton } from '@/components/primitives/skeleton';

const DemoAPISkeleton = () => (
	<div className="container flex w-full flex-1 animate-pulse flex-col items-center gap-4 py-4">
		<Skeleton className="h-6 w-1/2" />
		<Skeleton className="h-4 w-1/4" />
		<div className="w-full max-w-sm overflow-x-auto rounded-xl bg-slate-700 p-1 md:p-4">
			<Skeleton className="h-32 rounded bg-gray-200" />
		</div>
	</div>
);

export default DemoAPISkeleton;

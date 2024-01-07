import { Skeleton } from '@/components/primitives/skeleton';

export default function UsernameFormSkeleton() {
	return (
		<div className="flex flex-col space-y-8">
			<div className="w-full space-y-2">
				<Skeleton className="h-4 w-20" />
				<Skeleton className="h-10 w-full" />
				<Skeleton className="h-4 w-28" />
			</div>
			<div className="flex w-full justify-between">
				<Skeleton className="h-10 w-16" />
				<Skeleton className="h-10 w-20" />
			</div>
		</div>
	);
}

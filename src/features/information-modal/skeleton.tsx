import { Skeleton } from '@/components/primitives/skeleton';

export default function InformationModalSkeleton() {
	return (
		<div className="flex flex-col space-y-8">
			<Skeleton className="h-10 w-full" />
		</div>
	);
}

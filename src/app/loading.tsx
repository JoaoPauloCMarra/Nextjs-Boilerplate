import LoadingIndicator from '@/components/LoadingIndicator';

export default function Loading() {
	return (
		<div className="flex flex-1 items-center justify-center py-12">
			<LoadingIndicator size={60} />
		</div>
	);
}

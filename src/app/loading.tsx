import LoadingIndicator from '@/components/loading-indicator';

export default function Loading() {
	return (
		<div className="flex size-full flex-1 items-center justify-center py-12">
			<LoadingIndicator messageKey={'LoadingPage.text'} />
		</div>
	);
}

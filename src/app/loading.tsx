import { Loader2 as LoadingIcon } from 'lucide-react';

export default function Loading() {
	return (
		<div className="flex flex-1 items-center justify-center py-12" role="status">
			<div className="animate-spin text-primary">
				<LoadingIcon size={48} />
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}

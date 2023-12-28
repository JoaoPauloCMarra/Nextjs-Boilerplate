import { Loader2 as LoadingIcon } from 'lucide-react';
import { PageContainer } from '@/components/page-container';

export default function Loading() {
	return (
		<PageContainer>
			<div className="flex flex-1 items-center justify-center" role="status">
				<div className="animate-spin text-primary">
					<LoadingIcon size={48} />
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</PageContainer>
	);
}

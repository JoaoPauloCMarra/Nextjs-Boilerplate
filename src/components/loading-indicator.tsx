import { Loader2 as LoadingIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
	size?: number;
	className?: string;
};

export default function LoadingIndicator({ size = 24, className }: Props) {
	return (
		<div className={cn('animate-spin', className)} role="status">
			<LoadingIcon size={size} />
			<span className="sr-only">loading</span>
		</div>
	);
}

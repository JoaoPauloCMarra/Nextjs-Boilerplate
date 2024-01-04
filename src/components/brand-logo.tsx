import Image from 'next/image';
import { cn } from '@/lib/utils';
import Icon from '@/icons/brand.svg';

type Props = {
	className?: string;
};

export const BrandLogo = ({ className }: Props) => (
	<div className="flex flex-col items-center">
		<div className={cn('rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2', className)}>
			<Image
				src={Icon.src}
				className="svg-white size-full"
				alt="Home Icon"
				height={Icon.height}
				width={Icon.width}
			/>
		</div>
	</div>
);

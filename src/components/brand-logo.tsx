import Image from 'next/image';
import { cn } from '@/lib/utils';
import Icon from '@/icons/brand.svg';

type Props = {
	size?: number;
};

export const BrandLogo = ({ size }: Props) => (
	<div className="flex flex-col items-center">
		<div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
			<Image
				src={Icon.src}
				className={cn('svg-white size-10', size && `size-${size}`)}
				alt="Home Icon"
				height={size || Icon.height}
				width={size || Icon.width}
			/>
		</div>
	</div>
);

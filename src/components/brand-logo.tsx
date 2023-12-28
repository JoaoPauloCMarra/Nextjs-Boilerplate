import Image from 'next/image';
import Icon from '@/icons/brand.svg';

export const BrandLogo = () => (
	<div className="flex flex-col items-center">
		<div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
			<Image
				src={Icon.src}
				className="svg-white size-10"
				alt="Home Icon"
				height={Icon.height}
				width={Icon.width}
			/>
		</div>
	</div>
);

import homeSVG from '@/icons/home.svg';

export const BrandLogo = () => (
	<div className="flex flex-col items-center">
		<div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
			<img src={homeSVG.src} className="svg-white size-10" alt="Home Icon" />
		</div>
	</div>
);

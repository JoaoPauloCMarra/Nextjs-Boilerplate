import dynamic from 'next/dynamic';
import MainNav from './_components/main-nav';
import SearchForm from './_components/search-form';

const BrandLogo = dynamic(() => import('@/components/brand-logo'));

const Header = async () => (
	<header className="border-b">
		<div className="flex flex-col items-center justify-center p-4 md:h-16 md:flex-row md:py-0">
			<div className="mb-6 md:mb-0 md:mr-4">
				<BrandLogo className="size-12" />
			</div>
			<MainNav />
			<div className="ml-auto mt-6 flex w-full items-center md:mt-0 md:w-auto md:space-x-4">
				<SearchForm />
			</div>
		</div>
	</header>
);

export default Header;

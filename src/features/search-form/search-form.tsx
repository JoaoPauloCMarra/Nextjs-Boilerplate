'use client';

import { XIcon } from 'lucide-react';
import { Input } from '@/components/primitives/input';
import { SEARCH_FORM_TESTIDS } from './test-ids';
import { useSearchForm } from './use-search-form';

export const SearchForm = () => {
	const { inputTerm, onKeyDown, onChange, onClear } = useSearchForm();

	return (
		<div className="relative w-full">
			<Input
				type="search"
				placeholder="Search..."
				className="md:w-[100px] lg:w-[300px]"
				value={inputTerm}
				onKeyDown={onKeyDown}
				onChange={onChange}
				data-testid={SEARCH_FORM_TESTIDS.inputTerm}
			/>
			{inputTerm.length > 0 && (
				<div className="absolute right-2 top-3 z-10 text-red-500 ease-linear animate-in motion-safe:fade-in">
					<XIcon onClick={onClear} size={18} data-testid={SEARCH_FORM_TESTIDS.buttonClear} />
				</div>
			)}
		</div>
	);
};

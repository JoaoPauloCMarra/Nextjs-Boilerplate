'use client';

import { motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { Input } from '@/components/primitives/input';
import { SEARCH_FORM_TESTIDS } from './test-ids';
import { useSearchForm } from './use-search-form';
import type { Variants } from 'framer-motion';

const clearButtonVariants: Variants = {
	hidden: { opacity: 0 },
	show: { opacity: 1 }
};

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

			<motion.div
				className="absolute right-2 top-3 z-10 text-red-500"
				variants={clearButtonVariants}
				initial="hidden"
				animate={inputTerm.length > 0 ? 'show' : 'hidden'}
			>
				<XIcon onClick={onClear} size={18} data-testid={SEARCH_FORM_TESTIDS.buttonClear} />
			</motion.div>
		</div>
	);
};

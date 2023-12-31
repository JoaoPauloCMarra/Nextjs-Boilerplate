'use client';

import { useState, type ChangeEventHandler, type KeyboardEventHandler } from 'react';
import { useSetAtom } from 'jotai';
import { setSearchTermAtom } from '@/lib/store';

export function useSearchForm() {
	const setTerm = useSetAtom(setSearchTermAtom);
	const [inputTerm, setInputTerm] = useState('');

	const onClear = () => {
		setTerm('');
	};

	const onSubmit = (term: string) => {
		setTerm(term);
	};

	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setInputTerm(e.currentTarget.value);
		if (e.currentTarget.value.length === 0) {
			onClear();
		}
	};

	const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (inputTerm.length > 0 && e.key === 'Enter') {
			onSubmit(inputTerm);
		}
	};

	return {
		inputTerm,

		onKeyDown,
		onChange,
		onClear
	};
}

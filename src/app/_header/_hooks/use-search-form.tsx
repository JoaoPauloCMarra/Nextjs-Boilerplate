'use client';

import {
	useState,
	type ChangeEventHandler,
	type KeyboardEventHandler,
	useEffect,
	useCallback
} from 'react';
import { useSetAtom } from 'jotai';
import { setSearchTermAtom } from '@/lib/store';
import useDebounce from '@/hooks/use-debounce';

export function useSearchForm() {
	const setTerm = useSetAtom(setSearchTermAtom);
	const [inputTerm, setInputTerm] = useState('');
	const debouncedInputTerm = useDebounce(inputTerm, 500);

	const onClear = () => {
		setTerm('');
		setInputTerm('');
	};

	const onSubmit = useCallback(
		(term: string) => {
			setTerm(term);
		},
		[setTerm]
	);

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

	useEffect(() => {
		if (debouncedInputTerm.length > 0) {
			onSubmit(debouncedInputTerm);
		}
	}, [debouncedInputTerm, onSubmit]);

	return {
		inputTerm,

		onKeyDown,
		onChange,
		onClear
	};
}

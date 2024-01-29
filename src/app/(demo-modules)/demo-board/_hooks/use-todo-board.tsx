import { useEffect, useRef, useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { deleteTodoColumnAtom, getTodoColumnsAtom } from '@/lib/store';
import { scrollToElement } from '@/lib/utils';

export default function useTodoBoard() {
	const columns = useAtomValue(getTodoColumnsAtom);
	const deleteTodo = useSetAtom(deleteTodoColumnAtom);
	const boardContainerRef = useRef<HTMLDivElement>(null);
	const [isTodoColumnFormVisible, setTodoColumnFormVisible] = useState(false);

	const onColumnFormShow = () => {
		setTodoColumnFormVisible(true);
	};

	const onColumnFormHide = () => {
		setTodoColumnFormVisible(false);
	};

	const onColumnDelete = (index: number) => {
		deleteTodo(index);
	};

	useEffect(() => {
		if (!boardContainerRef.current?.lastElementChild || !columns.length) return;
		scrollToElement(boardContainerRef.current.lastElementChild, 100);
	}, [isTodoColumnFormVisible, columns.length]);

	return {
		columns,
		isTodoColumnFormVisible,
		boardContainerRef,

		onColumnFormShow,
		onColumnFormHide,
		onColumnDelete
	};
}

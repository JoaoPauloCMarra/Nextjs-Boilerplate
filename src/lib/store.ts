import { atom } from 'jotai';
import type { Dictionary, Locale } from './constants';
import { DEFAULT_LOCALE } from './constants';

/**
 * User Information Storage
 */
const userInfoAtom = atom<User>({
	username: ''
});

export const getUserAtom = atom((get) => get(userInfoAtom));

export const setUserAtom = atom(null, (_, set, update: User) => {
	set(userInfoAtom, update);
});

/**
 * i18n Storage
 */
export type I18nAtom = {
	locale: Locale;
	dictionary: Dictionary;
};

export const i18nAtom = atom<I18nAtom>({
	locale: DEFAULT_LOCALE,
	dictionary: {}
});

export const getLocaleAtom = atom((get) => get(i18nAtom));

export const setLocaleAtom = atom(null, (_, set, update: I18nAtom) => {
	set(i18nAtom, update);
});

/**
 * Search Term Storage
 */
const searchTermAtom = atom<string>('');

export const getSearchTermAtom = atom((get) => get(searchTermAtom));

export const setSearchTermAtom = atom(null, (_, set, term: string) => {
	set(searchTermAtom, term);
});

/**
 * Todo Board Storage
 */
const todoBoardAtom = atom<{
	columns: BoardColumn[];
}>({
	columns: []
});

export const getTodoColumnsAtom = atom((get) => get(todoBoardAtom).columns);

export const addTodoColumnsAtom = atom(null, (get, set, update: BoardColumn) => {
	const current = get(todoBoardAtom);

	set(todoBoardAtom, {
		...current,
		...{
			columns: [...current.columns, update]
		}
	});
});

export const deleteTodoColumnAtom = atom(null, (get, set, index: number) => {
	const current = get(todoBoardAtom);

	set(todoBoardAtom, {
		...current,
		...{
			columns: current.columns.filter((column) => column.index !== index)
		}
	});
});

import { atom } from 'jotai';

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
 * Search Term Storage
 */
const searchTermAtom = atom<string>('');

export const getSearchTermAtom = atom((get) => get(searchTermAtom));

export const setSearchTermAtom = atom(null, (_, set, term: string) => {
	set(searchTermAtom, term);
});

import { atom } from 'jotai';

/**
 * User Information Storage
 */
const userInfoAtom = atom<UserInfo>({
	username: ''
});

export const getUserInfoAtom = atom((get) => get(userInfoAtom));

export const setUserInfoAtom = atom(null, (_, set, update: UserInfo) => {
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

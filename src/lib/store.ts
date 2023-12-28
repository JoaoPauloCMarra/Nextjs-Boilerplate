import { atom } from 'jotai';

const userInfoAtom = atom<UserInfo>({
	username: ''
});

export const getUserInfoAtom = atom((get) => get(userInfoAtom));

export const setUserInfoAtom = atom(
	null, // it's a convention to pass `null` for the first argument
	(get, set, update: UserInfo) => {
		set(userInfoAtom, update);
	}
);

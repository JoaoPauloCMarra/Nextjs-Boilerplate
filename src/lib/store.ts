import { atom } from 'jotai';

const userInfoAtom = atom<UserInfo>({
	username: ''
});

export const getUserInfoAtom = atom((get) => get(userInfoAtom));

export const setUserInfoAtom = atom(null, (_, set, update: UserInfo) => {
	set(userInfoAtom, update);
});

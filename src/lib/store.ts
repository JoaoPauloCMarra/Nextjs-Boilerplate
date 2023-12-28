import { atom } from 'jotai';

export const userInfoAtom = atom<UserInfo>({
	name: '',
	email: ''
});

'use server';

import { waitSeconds } from '@/lib/utils';

export type UsernameFormSubmitParams = {
	data: User;
};

export async function usernameFormSubmit({ data }: UsernameFormSubmitParams) {
	await waitSeconds(2);

	if (data.username === 'user') {
		return { status: 401, message: `Username ${data.username} not allowed.` };
	}

	if (data.username === 'error') {
		throw new Error('Username error cause a demo error.');
	}

	return { status: 200, data, message: 'Success.' };
}

export type UsernameFormSubmit = typeof usernameFormSubmit;

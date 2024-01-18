'use server';

export type UsernameFormSubmitParams = {
	data: User;
};

export async function usernameFormSubmit({ data }: UsernameFormSubmitParams) {
	if (data.username === 'user') {
		return { status: 401, message: `Username ${data.username} is not allowed.` };
	}

	if (data.username === 'error') {
		throw new Error('Username error cause a demo error.');
	}

	return { status: 200, data, message: 'Success.' };
}

export type UsernameFormSubmit = typeof usernameFormSubmit;

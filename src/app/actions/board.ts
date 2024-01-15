'use server';

export type BoardColumnSubmitParams = {
	data: BoardColumn;
};

export async function boardColumnSubmit({ data }: BoardColumnSubmitParams) {
	if (data.name.toLowerCase() === 'invalid') {
		return { status: 401, message: `Column name ${data.name} not allowed.` };
	}

	if (data.name.toLowerCase() === 'error') {
		throw new Error('Column name error cause a demo error.');
	}

	return { status: 200, data, message: 'Success.' };
}

export type BoardColumnSubmit = typeof boardColumnSubmit;

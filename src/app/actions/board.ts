'use server';

export type BoardColumnSubmitParams = {
	data: BoardColumn;
};

export async function boardColumnSubmit({ data }: BoardColumnSubmitParams) {
	return { status: 200, data, message: 'Success.' };
}

export type BoardColumnSubmit = typeof boardColumnSubmit;

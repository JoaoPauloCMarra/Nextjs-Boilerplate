'use server';

import { FieldValues } from 'react-hook-form';

type Response = {
	message: string;
	data: UserInfo;
};

export async function submitUsername(data: FieldValues) {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return { message: `the new username was saved.`, data } as Response;
}

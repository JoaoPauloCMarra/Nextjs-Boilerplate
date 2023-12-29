import { waitSeconds } from '@/lib/utils';
import type { UsernameFormValues } from '@/features/username-form/username-form';

export const dynamic = 'force-dynamic';

type UsernamePOSTResponse = {
	message: string;
	data: UserInfo;
};

export async function POST(request: Request) {
	const data = (await request.json()) as UsernameFormValues;

	if (data.username === 'user') {
		return Response.json(
			{
				message: `Username '${data.username}' not allowed.`,
				data: { username: '' }
			} satisfies UsernamePOSTResponse,
			{ status: 401 }
		);
	}

	await waitSeconds(2);

	const message = 'Username change saved.';

	return Response.json(
		{
			message,
			data
		} satisfies UsernamePOSTResponse,
		{ status: 200 }
	);
}

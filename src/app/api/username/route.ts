export const dynamic = 'force-dynamic';

type Response = {
	message: string;
	data: UserInfo;
};

export async function POST(request: Request) {
	const data = await request.json();

	await new Promise((resolve) => setTimeout(resolve, 5000));

	const message = 'Username change saved.';

	return Response.json({
		message,
		data
	} as Response);
}

'use client';

import dynamic from 'next/dynamic';

const UsernameForm = dynamic(() =>
	import('@/features/username-form').then((module) => module.UsernameForm)
);

export default function DemoFormPage() {
	return (
		<div className="container flex flex-1 flex-col items-center gap-4 py-4">
			<div className="max-w-sm">
				<div className="flex w-full flex-col gap-4">
					<UsernameForm />
				</div>
			</div>
		</div>
	);
}

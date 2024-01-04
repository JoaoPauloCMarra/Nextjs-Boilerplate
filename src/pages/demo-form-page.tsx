import { usernameFormSubmit } from '@/app/actions/username';
import { UsernameForm } from '@/features/username-form';

export default function DemoFormPage() {
	return (
		<div className="container flex flex-1 flex-col items-center py-4 md:gap-4">
			<div className="flex w-full flex-col md:w-80 md:gap-4">
				<UsernameForm action={usernameFormSubmit} />
			</div>
		</div>
	);
}

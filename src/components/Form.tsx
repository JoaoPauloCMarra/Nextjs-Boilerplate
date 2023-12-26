'use client';

import { forwardRef, type FormEventHandler, ComponentProps } from 'react';
import Button from '@/components/Button';

type Props = ComponentProps<'form'>;

const Form = forwardRef<HTMLFormElement, Props>((props, ref) => {
	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		console.log(JSON.stringify(Object.fromEntries(formData), null, 2));
	};

	return (
		<form className="flex flex-col gap-2" onSubmit={onSubmit} ref={ref} {...props}>
			<label htmlFor="name" className="flex flex-col">
				<span>name</span>
				<input
					className="border p-2 text-gray-900"
					id="name"
					name="name"
					data-testid="input-name"
				/>
			</label>
			<label htmlFor="email" className="flex flex-col">
				<span>email</span>
				<input
					className="border p-2 text-gray-900"
					id="email"
					name="email"
					data-testid="input-email"
				/>
			</label>
			<label htmlFor="password" className="flex flex-col">
				<span>password</span>
				<input
					className="border p-2 text-gray-900"
					id="password"
					name="password"
					data-testid="input-password"
					type="password"
				/>
			</label>

			<Button size="lg" aria-label="Form Primary Button" type="submit">
				Primary
			</Button>
			<Button variant="secondary" size="lg" aria-label="Form Secondary Button" type="submit">
				Secondary
			</Button>
			<Button variant="ghost" size="lg" aria-label="Form Ghost Button" type="submit">
				Ghost
			</Button>
			<Button variant="link" size="lg" aria-label="Form Link Button" type="submit">
				Link
			</Button>
			<Button variant="outline" size="lg" aria-label="Form Outline Button" type="submit">
				Outline
			</Button>
			<Button variant="destructive" size="lg" aria-label="Form Destructive Button" type="submit">
				Destructive
			</Button>
		</form>
	);
});

Form.displayName = 'Form';

export default Form;

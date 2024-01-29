import { z } from 'zod';

export const usernameFormSchema = z.object({
	username: z.string().toLowerCase().min(2, {
		message: 'Username must be at least 2 characters.'
	})
});

export type UsernameFormValues = z.infer<typeof usernameFormSchema>;

import { z } from 'zod';

export const todoBoardColumnFormSchema = z.object({
	index: z.number(),
	name: z
		.string()
		.min(2, {
			message: 'Column name must be at least 2 characters.'
		})
		.max(20, {
			message: 'Column name must be equal or less than 20 characters.'
		})
});

export type TodoBoardColumnFormValues = z.infer<typeof todoBoardColumnFormSchema>;

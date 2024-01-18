import { describe, expect, test } from 'vitest';
import { boardColumnSubmit } from './board';

describe('boardColumnSubmit', () => {
	test('returns an error for input "error"', async () => {
		await expect(
			(async () => {
				await boardColumnSubmit({
					data: {
						index: 1,
						name: 'error'
					}
				});
			})()
		).rejects.toThrowError();
	});
	test('returns an validation message for input "user"', async () => {
		const result = await boardColumnSubmit({
			data: {
				index: 1,
				name: 'invalid'
			}
		});

		expect(JSON.stringify(result)).toBe(
			JSON.stringify({ status: 401, message: 'Column name invalid is not allowed.' })
		);
	});
	test('returns success for input "jota"', async () => {
		const column = {
			index: 0,
			name: 'jota'
		};
		const result = await boardColumnSubmit({
			data: column
		});

		expect(JSON.stringify(result)).toBe(
			JSON.stringify({ status: 200, data: column, message: 'Success.' })
		);
	});
});

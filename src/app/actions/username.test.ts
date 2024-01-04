import { describe, expect, test } from 'vitest';
import { usernameFormSubmit } from './username';

describe('usernameFormSubmit', () => {
	test('returns an error for input "error"', async () => {
		await expect(
			(async () => {
				await usernameFormSubmit({
					data: {
						username: 'error'
					}
				});
			})()
		).rejects.toThrowError();
	});
	test('returns an validation message for input "user"', async () => {
		const result = await usernameFormSubmit({
			data: {
				username: 'user'
			}
		});

		expect(JSON.stringify(result)).toBe(
			JSON.stringify({ status: 401, message: 'Username user not allowed.' })
		);
	});
	test('returns success for input "jota"', async () => {
		const username = 'jota';
		const result = await usernameFormSubmit({
			data: {
				username
			}
		});

		expect(JSON.stringify(result)).toBe(
			JSON.stringify({ status: 200, data: { username }, message: 'Success.' })
		);
	});
});

import { test, expect } from '@playwright/test';
import { APP_NAME } from '@/lib/constants';

test('has title', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(`Home - ${APP_NAME}`);
});

test('form works', async ({ page }) => {
	await page.goto('/');

	const inputName = page.getByTestId('input-name');
	expect(inputName).toBeTruthy();
	await inputName.fill('Jota');

	const inputEmail = page.getByTestId('input-email');
	expect(inputEmail).toBeTruthy();
	await inputEmail.fill('jota.email@domain.com');

	const inputPassword = page.getByTestId('input-password');
	const inputPasswordType = await inputPassword.getAttribute('type');
	expect(inputPassword).toBeTruthy();
	expect(inputPasswordType).toBe('password');
	await inputPassword.fill('@jota123321');
});

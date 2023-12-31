import { test, expect } from '@playwright/test';
import { APP_NAME } from '@/lib/constants';
import { USERNAME_FORM_TESTIDS } from '@/features/username-form/test-ids';

test('has title', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(`Home - ${APP_NAME}`);
});

test('demo form works', async ({ page }) => {
	await page.goto('/demo-form');

	await expect(page).toHaveTitle(`Demo Form - ${APP_NAME}`);

	const inputName = page.getByTestId(USERNAME_FORM_TESTIDS.inputUsername);
	const buttonClear = page.getByTestId(USERNAME_FORM_TESTIDS.buttonClear);
	const buttonSubmit = page.getByTestId(USERNAME_FORM_TESTIDS.buttonSubmit);

	expect(inputName).toBeTruthy();
	expect(buttonClear).toBeTruthy();
	expect(buttonSubmit).toBeTruthy();

	await inputName.fill('jota');

	expect(inputName).toHaveValue('jota');

	await buttonClear.click();

	expect(inputName).toBeEmpty();
});

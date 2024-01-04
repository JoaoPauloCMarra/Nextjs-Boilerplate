import { test, expect } from '@playwright/test';
import { APP_NAME } from '@/lib/constants';
import { USERNAME_FORM_TESTIDS } from '@/features/username-form/test-ids';

test('has title', async ({ page }) => {
	await page.goto('/');

	await page.waitForSelector('main[style="opacity: 1;"]');

	await expect(page).toHaveTitle(`Home - ${APP_NAME}`);
});

test('demo form works', async ({ page }) => {
	await page.goto('/demo-form');

	await page.waitForSelector('main[style="opacity: 1;"]');

	await expect(page).toHaveTitle(`Demo Form - ${APP_NAME}`);

	const inputName = page.getByTestId(USERNAME_FORM_TESTIDS.inputUsername);
	expect(inputName).toBeTruthy();
	const buttonClear = page.getByTestId(USERNAME_FORM_TESTIDS.buttonClear);
	expect(buttonClear).toBeTruthy();
	const buttonSubmit = page.getByTestId(USERNAME_FORM_TESTIDS.buttonSubmit);
	expect(buttonSubmit).toBeTruthy();

	await inputName.pressSequentially('jota');

	expect(inputName).toHaveValue('jota');

	await buttonClear.click();

	expect(inputName).toBeEmpty();
});

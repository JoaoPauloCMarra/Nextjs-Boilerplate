import { test, expect } from '@playwright/test';
import { APP_NAME } from '@/lib/constants';
import { TEST_IDS } from '@/components/form-demo';

test('has title', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(`Home - ${APP_NAME}`);
});

test('form works', async ({ page }) => {
	await page.goto('/');

	const inputName = page.getByTestId(TEST_IDS.inputUsername);
	const buttonClear = page.getByTestId(TEST_IDS.buttonClear);
	const buttonSubmit = page.getByTestId(TEST_IDS.buttonSubmit);

	expect(inputName).toBeTruthy();
	expect(buttonClear).toBeTruthy();
	expect(buttonSubmit).toBeTruthy();

	await inputName.fill('jota');

	expect(inputName).toHaveValue('jota');

	await buttonClear.click();

	expect(inputName).toBeEmpty();
});

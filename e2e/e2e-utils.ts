import type { Locator, Page } from '@playwright/test';

export async function getInputValueString(input: Locator) {
	return (await input.inputValue()).toString();
}

export async function waitForContentDoShow(page: Page, route: string) {
	await page.waitForURL(`**/${route}`);
	await page.waitForLoadState('domcontentloaded');
	await page.waitForSelector('main[style="opacity: 1;"]');
}

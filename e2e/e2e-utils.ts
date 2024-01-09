import type { Locator } from '@playwright/test';

export async function getInputValueString(input: Locator) {
	return (await input.inputValue()).toString();
}

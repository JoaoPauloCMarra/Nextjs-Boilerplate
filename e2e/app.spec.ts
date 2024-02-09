import { test, expect } from '@playwright/test';
import { APP_NAME, BASE_URL } from '@/lib/constants';
import { waitSeconds } from '@/lib/utils';
import { DEMO_BOARD_TESTIDS } from '@/app/(demo-modules)/demo-board/test-ids';
import { USERNAME_FORM_TESTIDS } from '@/app/(demo-modules)/demo-form/test-ids';
import { MAIN_NAV_TESTIDS } from '@/app/_header/_components/test-ids';
import { getInputValueString, waitForContentDoShow } from './e2e-utils';
import type { Locator, Page } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

let currentPage: Page;
let menuItems: Record<string, Locator>;

test.beforeAll(async ({ browser }) => {
	currentPage = await browser.newPage({
		storageState: undefined,
		reducedMotion: 'reduce',
		locale: 'en'
	});

	await currentPage.goto(`${BASE_URL}/`);
	await waitForContentDoShow(currentPage, '');

	menuItems = {
		overview: currentPage.getByTestId(MAIN_NAV_TESTIDS.overview),
		demoForm: currentPage.getByTestId(MAIN_NAV_TESTIDS.demoForm),
		demoModal: currentPage.getByTestId(MAIN_NAV_TESTIDS.demoModal),
		demoApi: currentPage.getByTestId(MAIN_NAV_TESTIDS.demoApi),
		demoBoard: currentPage.getByTestId(MAIN_NAV_TESTIDS.demoBoard)
	};

	expect(menuItems.overview).toBeVisible();
	expect(menuItems.demoForm).toBeVisible();
	expect(menuItems.demoModal).toBeVisible();
	expect(menuItems.demoApi).toBeVisible();
	expect(menuItems.demoBoard).toBeVisible();
});

test('home has the right title', async () => {
	await expect(currentPage).toHaveTitle(`Home - ${APP_NAME}`);
});

test('demo form works', async () => {
	await menuItems.demoForm.click();
	await waitForContentDoShow(currentPage, 'demo-form');

	await expect(currentPage).toHaveTitle(`Demo Form - ${APP_NAME}`);

	const inputName = currentPage.getByTestId(USERNAME_FORM_TESTIDS.inputUsername);
	expect(inputName).toBeVisible();
	const buttonClear = currentPage.getByTestId(USERNAME_FORM_TESTIDS.buttonClear);
	expect(buttonClear).toBeVisible();
	const buttonSubmit = currentPage.getByTestId(USERNAME_FORM_TESTIDS.buttonSubmit);
	expect(buttonSubmit).toBeVisible();

	await inputName.fill('jota');
	expect(await getInputValueString(inputName)).toBe('jota');

	await buttonClear.click();
	expect(await getInputValueString(inputName)).toBe('');
});

test('demo modal works', async () => {
	await menuItems.demoModal.click();
	await waitForContentDoShow(currentPage, 'demo-modal');

	await expect(currentPage).toHaveTitle(`Demo Modal - ${APP_NAME}`);
});

test('demo api works', async () => {
	await menuItems.demoApi.click();
	await waitForContentDoShow(currentPage, 'demo-api');

	await expect(currentPage).toHaveTitle(`Demo API - ${APP_NAME}`);
});

test('demo board works', async () => {
	await menuItems.demoBoard.click();
	await waitForContentDoShow(currentPage, 'demo-board');

	await expect(currentPage).toHaveTitle(`Demo Board - ${APP_NAME}`);

	const columnForm = currentPage.getByTestId(DEMO_BOARD_TESTIDS.addColumnForm);
	expect(columnForm).toBeHidden();

	const addColumnButton = currentPage.getByTestId(DEMO_BOARD_TESTIDS.addColumnButton);
	expect(addColumnButton).toBeVisible();

	await addColumnButton.click();

	expect(columnForm).toBeVisible();

	const inputName = columnForm.getByTestId('input-name');
	expect(inputName).toBeVisible();

	await inputName.fill('Backlog');
	expect(await getInputValueString(inputName)).toBe('Backlog');

	await currentPage.keyboard.press('Enter');

	await waitSeconds(0.15);

	const backlogColumn = currentPage.getByTestId('column-1-backlog');
	expect(backlogColumn).toBeVisible();
	expect(backlogColumn.getByText('Backlog')).toBeVisible();
});

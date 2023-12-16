import { test, Page } from '@playwright/test';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('runs first', async () => {
  await page.goto('https://adactinhotelapp.com/');
});

test('runs second', async () => {
  await page.getByText('Adactin Launches The Adactin Hotel App!').click();
});
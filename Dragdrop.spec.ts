import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Drag and Drop', exact: true }).click();
  await page.locator('#column-a').click();
  await page.locator('#column-b').click();

});
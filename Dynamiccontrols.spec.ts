import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Dynamic Controls' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Remove' }).click();
  await page.getByRole('button', { name: 'Enable' }).click();
});
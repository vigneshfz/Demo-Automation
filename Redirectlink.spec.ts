import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Redirect Link' }).click();
  await page.getByRole('link', { name: 'here' }).click();
  await page.getByRole('link', { name: '200' }).click();
  await page.getByRole('link', { name: 'here' }).click();
});
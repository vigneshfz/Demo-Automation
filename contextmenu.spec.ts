import { test, expect } from '@playwright/test';

test('context menu', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Context Menu' }).nth(1).click();
});
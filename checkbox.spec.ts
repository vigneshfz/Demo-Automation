import { test, expect } from '@playwright/test';

test('checkbox', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Check Boxes' }).click();
  await page.getByLabel('Checkbox 1').check();
});
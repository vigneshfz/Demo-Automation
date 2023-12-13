
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Notification Message' }).click();
  await page.getByRole('link', { name: 'Click here' }).click();
});

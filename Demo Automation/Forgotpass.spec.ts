import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Forgot Password' }).click();
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('vigneshjsm777@gmail.com');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
});

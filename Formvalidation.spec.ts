import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Form Validation'}).click();
  await page.getByLabel('Contact Name').click();
  await page.getByLabel('Contact Name').fill('vignesh');

  await page.getByLabel('Contact number').click();
  await page.getByLabel('Contact number').fill('012-123456');

  await page.locator('input[name="pickupdate"]').fill('2023-12-11');
    await page.getByRole('combobox', { name: 'Payment Method' }).selectOption('card');


await page.getByRole('button', { name: 'Register'}).click();
});



import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Autocomplete' }).click();
  await page.getByPlaceholder('Country name').click();
  await page.getByPlaceholder('Country name').fill('I');
  await page.getByText('India').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});
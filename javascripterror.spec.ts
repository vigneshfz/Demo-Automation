

import { test, expect } from '@playwright/test';

test('JavaScript Error', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'JavaScript Error' }).click();


});



import { test, expect } from '@playwright/test';

test('Slow Resources', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Slow Resources' }).click();
 
});

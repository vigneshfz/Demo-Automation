

import { test, expect } from '@playwright/test';

test('Infinite scroll', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Infinite Scroll' }).click();
});


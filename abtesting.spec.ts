
import { test, expect } from '@playwright/test';

test('a/btesting', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'A/B Testing', exact: true }).click();

});
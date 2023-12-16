
import { test, expect } from '@playwright/test';

test('disappearing elements', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Disappearing Elements', exact: true }).click();
});
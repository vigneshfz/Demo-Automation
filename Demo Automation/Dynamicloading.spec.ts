
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Dynamic Loading' }).click();
  await page.getByRole('link', { name: 'Example 1: Element on page that is hidden' }).click();
  await page.getByRole('button', { name: 'Start' }).click();


})

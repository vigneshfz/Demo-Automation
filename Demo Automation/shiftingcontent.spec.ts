import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByText('Shifting Content').click();
  await page.getByText('Example 1: Menu Element').click();
  await page.getByText('Shifting Content').click();
  await page.getByText('Example 2: An image').click();
  await page.locator('p').filter({ hasText: 'To load it randomly, append ?' }).getByRole('link').click();
  await page.locator('p').filter({ hasText: 'To specify a differant numbor' }).getByRole('link').click();
  await page.locator('p').filter({ hasText: 'To do both together, use ?' }).getByRole('link').click();
  await page.locator('p').filter({ hasText: 'For a simple image append ?' }).getByRole('link').click();
  await page.getByText('Shifting Content').click();
  await page.getByText('Example 3: List').click();
  await page.getByText('Shifting Content').click();
});
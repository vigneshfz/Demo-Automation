import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'MyIP Address', exact: true }).click();
  await page.getByText('IPv4:').click();
  await page.getByText('IPv6: Not Detected').click();
  await page.getByText('Country: India').click();
});
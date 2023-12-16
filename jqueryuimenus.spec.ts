
import { test, expect } from '@playwright/test';

test('jqueryuimenus', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Disappearing Elements', exact: true }).click();
  await page.getByRole('link', { name: 'Menu' }).click();
  await page.getByRole('menuitem', { name: 'Enabled' }).click();
  await page.getByRole('menuitem', { name: 'Downloads' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('menuitem', { name: 'Excel' }).click();
  const download = await downloadPromise;
});
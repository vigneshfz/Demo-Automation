
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'File Downloader' }).click();
  await page.getByTestId('some-file.txt').click();
 })
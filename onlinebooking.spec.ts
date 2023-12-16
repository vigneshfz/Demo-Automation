import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('vasanth@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('QWER123@#');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('menuitem', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Hero Hoodie' }).first().click();
  await page.getByRole('option', { name: 'XS' }).click();
  await page.getByRole('option', { name: 'Black' }).click();
  await page.getByRole('spinbutton', { name: 'Qty' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: ' My Cart 13 13\nitems' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
});



1
import { test, expect } from '@playwright/test';
2
​
3
test('test', async ({ page }) => {
4
  await page.goto('https://adactinhotelapp.com/');
5
  await page.locator('#username').click();
6
  await page.locator('#username').fill('vignesh2409');
7
  await page.locator('#password').click();
8
  await page.locator('#password').fill('vikymk');
9
  await page.getByRole('button', { name: 'Login' }).click();
10
  await page.locator('#location').selectOption('Sydney');
11
  await page.getByRole('cell', { name: 'Search Hotel (Fields marked with Red asterix (*) are mandatory) Location* Hotels Room Type Number of Rooms* Check In Date* (dd/mm/yyyy) Check Out Date* (dd/mm/yyyy) Adults per Room* Children per Room Search Reset' }).getByRole('cell').filter({ hasText: '- Select Hotel - Hotel Creek Hotel Sunshine Hotel Hervey Hotel Cornice' }).click();
12
  await page.locator('#hotels').selectOption('Hotel Sunshine');
13
  await page.locator('#room_nos').selectOption('6');
14
  await page.locator('#adult_room').selectOption('2');
15
  await page.locator('#child_room').selectOption('1');
16
  await page.getByRole('button', { name: 'Search' }).click();
17
  await page.locator('#radiobutton_1').check();
18
  await page.getByRole('button', { name: 'Continue' }).click();
19
  await page.locator('#first_name').click();
20
  await page.locator('#first_name').fill('vignesh ');
21
  await page.locator('#last_name').click();
22
  await page.locator('#last_name').fill('k');
23
  await page.locator('#address').click();
24
  await page.locator('#address').fill('abc nagar chennai');
25
  await page.locator('#cc_num').click();
26
  await page.locator('#cc_num').fill('12345678');
27
  await page.locator('#cc_num').click();
28
  await page.locator('#cc_num').fill('1234567844444444');
29
  await page.locator('#cc_type').selectOption('VISA');
30
  await page.locator('#cc_exp_month').selectOption('9');
31
  await page.locator('#cc_exp_year').selectOption('2022');
32
  await page.locator('#cc_cvv').click();
33
  await page.locator('#cc_cvv').fill('8855');
34
  await page.getByRole('cell', { name: 'Back Book A Hotel Hotel Name Location Room Type Number of Rooms Total Days Price per Night Total Price GST Final Billed Price First Name* Last Name* Billing Address* Credit Card No.* Use 16 digit Dummy Data Credit Card Type* Expiry Date* CVV Number* Book Now Cancel' }).getByRole('row', { name: 'Final Billed Price' }).getByRole('cell').nth(1).click();
35
  await page.locator('body').press('Tab');
36
  await page.locator('#cc_cvv').click();
37
  await page.getByRole('button', { name: 'Book Now' }).click();
38
  await page.goto('https://adactinhotelapp.com/BookingConfirm.php');
39
});

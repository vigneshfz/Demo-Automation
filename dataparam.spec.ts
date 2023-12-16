
// import { test, expect } from './my-test';

// test.beforeEach(async ({ settingsPage }) => {
//   await settingsPage.switchToDarkMode();
// });

// test('basic test', async ({ todoPage, page }) => {
//   await todoPage.addToDo('something nice');
//   await expect(page.getByTestId('todo-title')).toContainText(['something nice']);
// });
import { test } from "e:/playright/node_modules/@playwright/test/index";
import { expect } from "@playwright/test";
 test('parametrized test', async ({ page }) => {
    await page.goto("https//computer-database.gatling.io/computers");
    await page.click("#add");
    await page.fill("#name","some A");
    await page.selectOption("#company",{
        label: "Apple Inc."
    });
    await page.click("input[type=''submit]");
    expect (page.locator("div.alert-message.warning")).toContainText("Done")
})



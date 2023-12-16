import {test, expect} from '@playwright/test';
//Run|Debug|Inspect
test.describe('suite#1-broder functionality#1', () => {
    test.describe.configure({mode: 'parallel'});
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });
    test.afterEach(async ({page}) => {
        await page.close();
    });

    //Run|Debug|Inspect|Execute playwright Test
    test('basic test@ first', async ({page}) => {
        const title = page.locator('.navbar_inner .navbar_title');
        await expect(title).toHaveText('playwright');
    });

    //Run|Debug|Inspect|Execute playwright Test
    test('second test@ second', async ({page}) => {
        //click text=Get started
        await page.locator('text=Get started').click();
        await expect(page).toHaveURL('https://playwright.dev/docs/intro');
        
    });
});


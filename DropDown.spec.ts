import {test,Page} from "@playwright/test"
test('TC_001',async({page})=>{
    await page.goto('https://uat.quiklyz.com/')
    await page.getByText('Bengaluru', { exact: true }).click()
    await page.locator('fg-client-top-nav').getByRole('button', { name: 'Bengaluru ' }).click()
for (let i = 0; i < 5; i++) {
    await page.keyboard.press('ArrowDown')
}
    await page.keyboard.press('Enter')
})
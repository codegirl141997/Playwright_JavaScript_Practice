const { test, expect } = require('@playwright/test');

test('Multi_Usertest', async ({ browser }) => {

    let ctx1 = await browser.newContext();
    let ctx2 = await browser.newContext();

    let page1 = await ctx1.newPage();
    let page2 = await ctx2.newPage();

    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
    await page1.locator('#input-email').fill('dhanashreee15@gmail.com');
    await page1.locator('#input-password').fill('dhanashreee14@gmail.com');
    await page1.locator('//input[@value="Login"]').click();


    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
    await page2.locator('#input-email').fill('dhanashreee14@gmail.com');
    await page2.locator('#input-password').fill('A7ZWxC@xDvemqaM');
    await page1.locator('//input[@value="Login"]').click();

    await page1.pause();
    await page2.pause();

});
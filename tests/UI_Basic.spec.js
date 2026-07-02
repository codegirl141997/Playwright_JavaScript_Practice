//const {test, expect}= require('@playwright/test');

// test('first playwright test', async function()
// 1st way we can write this 
//cls
// test('first playwright test', async ({browser, page})=>
// in Javascript not execute sequnce 
/*
{
 
    // chrome - Playwright/ cookies 

    //const context = browser.newContext(); // fresh browser no cookies instance
    //const page = await context.newPage(); // New page will open
    await page.goto("https://www.google.com");
          console.log(await page.title)
     await expect(page).toHaveTitle("Google");
});*/

 
//2nd way we can write this 
//const { test, expect } = require('@playwright/test');

test('Rahul_Shetty', async ({browser, page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").fill("scsbcskcls");
    await page.locator("#password").fill("Learning");

    await page.locator("#signInBtn").click();

    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
});
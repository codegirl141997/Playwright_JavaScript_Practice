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
/*
const {test, expect}= require('@playwright/test');
test('Rahul_Shetty', async ({browser, page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").fill("scsbcskcls");
    await page.locator("#password").fill("Learning");

    await page.locator("#signInBtn").click();

    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText("Incofrrect");
});
*/

/** 
const {test, expect}= require('@playwright/test');
test('Rahul_Shetty', async ({browser, page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").fill("scsbcskcls");
    await page.locator("#password").fill("Learning");

    await page.locator("#signInBtn").click();

    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
});
*/

//type & Fil methods which is used to fill the info the text box
// decleare locators
// added
const { test, expect } = require('@playwright/test');
test('Rahul_Shetty', async ({ browser, page }) => {
    const username = page.locator("#username");
    const password = page.locator("#password");
    const Submit_button = page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await username.type("rahulshettyacademy ");
    await password.type("Learning@830$3mK2");
    await Submit_button.click();
});


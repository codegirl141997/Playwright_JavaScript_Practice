const {test, expect}= require('@playwright/test');

// test('first playwright test', async function()
// 1st way we can write this 
test('first playwright test', async ({browser, page})=>
// in Javascript not execute sequnce 

{
 
    // chrome - Playwright/ cookies 

    //const context = browser.newContext(); // fresh browser no cookies instance
    //const page = await context.newPage(); // New page will open
    await page.goto("https://www.google.com");
          console.log(await page.title)
     await expect(page).toHaveTitle("Google");
});

 
//2nd way we can write this 
test.only('Rahul_Shetty', async({browser,page})=>

    {
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
      await page.locator('#username').type("rahulshettyacademy ");
      await page.locator("#password").type("Learning@830$3mK2)");
      await page.locator("#signInBtn").click();
    });
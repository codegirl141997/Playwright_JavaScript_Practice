// @ts-check
import { defineConfig, devices } from '@playwright/test';

/*
  *@see https://playwright.dev/docs/test-configuration
*/

const config=({
  testDir: './tests',
  timeout: 100*1000,
  expect: 
  {
    timeout: 100*8000
    
  },
 reporter: [
    ['html'],
    // ['dot'],
    // ['json'],
    ['list']
],


  use:{
    trace:'retain on failure',
     browserName: 'chromium',
     headless: false
  }
});

module.exports= config


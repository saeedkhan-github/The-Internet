import { test, expect } from '@playwright/test';

test('Test script to verify the functionality of Dropdown on elements', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Dropdown';

  // opening the relevant page
  await page.getByRole('link', { name : testName }).click();

  await page.locator('#dropdown').selectOption({label:'Option 1'})

  await page.waitForTimeout(4000);

  
});



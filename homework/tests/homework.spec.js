// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Testing each build', () => {
     test('Build 1: An error message should be visible when letters are entered', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '1'});
      await page.locator('#number1Field').type('a');
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toBeVisible();
    });

    test('Build 2: Concatenating 2 and 3 results in 23', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '2'});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('23');
    });

    test('Build 3: Integer only should not be an option when concatenating', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '3'});
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
  
      await expect(page.locator('#integerSelect')).toBeHidden();
    });

    test('Build 4: Integer only should be enabled when performing calculations', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '4'});
  
      await expect(page.locator('#integerSelect')).toBeEnabled();
    });

    test('Build 5: Clear button should be enabled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '5'});
  
      await expect(page.locator('#clearButton')).toBeEnabled();
    });

    test('Build 6: Division by 0 should produce an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '6'});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#errorMsgField')).toBeVisible();
    });

    test('Build 7: Adding 0 and 1 twice should result in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '7'});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });

    test('Build 8: Typing a letter in Number Field 1 produces a corresponding error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '8'});
      await page.locator('#number1Field').type('a');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    });

    test('Build 9: Number Field 2 should be visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '9'});
  
      await expect(page.locator('#number2Field')).toBeVisible();
    });

    test('Build 9: Calculate button should be visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: '9'});
  
      await expect(page.locator('#calculateButton')).toBeVisible();
    });
});


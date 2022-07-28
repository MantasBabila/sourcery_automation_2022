// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

data.forEach(version => {
  test.describe('Build: ' + version, () => {
     test('An error message should be visible when letters are entered', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toBeVisible();
    });

    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('23');
    });

    test('Integer only should not be an option when concatenating', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
  
      await expect(page.locator('#integerSelect')).toBeHidden();
    });

    test('Integer only should be enabled when performing calculations', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
  
      await expect(page.locator('#integerSelect')).toBeEnabled();
    });

    test('Clear button should be enabled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
  
      await expect(page.locator('#clearButton')).toBeEnabled();
    });

    test('Division by 0 should produce an error', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#errorMsgField')).toHaveText("Divide by zero error!");
    });

    test('Adding 0 and 1 twice should result in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });

    test('Typing a letter in Number Field 1 produces a corresponding error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    });

    test('Number Field 2 should be visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
  
      await expect(page.locator('#number2Field')).toBeVisible();
    });

    test('Calculate button should be visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
  
      await expect(page.locator('#calculateButton')).toBeVisible();
    });
  });
});


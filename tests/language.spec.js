import { expect, test } from './fixtures/test_fixtures';

test.describe('language change', () => {
  test('Switch the interface language', async ({ page, homePage }) => {
    await test.step('Given the user is on the home page', async () => {
      await homePage.navigateToHomePage();
      await homePage.verifyHomePageDisplayed();
    });

    let originalProductNames = [];
    originalProductNames = await homePage.getProductCardTitles();

    await test.step('When the user switches the interface language to "Deutsch"', async () => {
      await homePage.selectLanguage('DE');
    });

    await test.step('Then the application interface should be displayed in German', async () => {
      await expect(homePage.homeLink).toContainText('Start', {
        timeout: 10000,
      });
    });

    await test.step('And the product names and descriptions should remain in English', async () => {
      const currentProductNames = await homePage.getProductCardTitles();
      expect(currentProductNames).toEqual(originalProductNames);
    });
  });
});

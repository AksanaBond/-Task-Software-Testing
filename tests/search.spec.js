import { expect, test } from './fixtures/test_fixtures';

test.describe('Search for products', () => {
  test('Search for a product using a general keyword', async ({
    page,
    homePage,
  }) => {
    await test.step('Given the user is on the home page', async () => {
      await homePage.navigateToHomePage();
      await homePage.verifyHomePageDisplayed();
    });

    await test.step('When the user searches for the product', async () => {
      await homePage.searchForProduct('Claw Hammer');
      await homePage.waitForSearchResults('Claw Hammer');
    });

    await test.step('Then all returned product cards should contain "Claw Hammer" in their title', async () => {
      const productTitles = await homePage.getProductCardTitles();
      for (const title of productTitles) {
        expect(title.toLowerCase()).toContain('claw hammer');
      }
    });

    await test.step('And multiple relevant products can be displayed', async () => {
      const productTitles = await homePage.getProductCardTitles();
      expect(productTitles.length).toBeGreaterThan(0);
    });
  });
});

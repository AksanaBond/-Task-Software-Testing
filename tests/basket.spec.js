import { expect, test } from './fixtures/test_fixtures';

test.describe('Basket', () => {
  test('Add a product to the basket', async ({
    page,
    homePage,
    productPage,
  }) => {
    await test.step('Given the user is on the home page', async () => {
      await homePage.navigateToHomePage();
      await homePage.verifyHomePageDisplayed();
    });

    await test.step('And the user navigates to the product details page "Bolt Cutters"', async () => {
      await productPage.navigateToProduct('Bolt Cutters');
    });

    await test.step('When the user adds product "Bolt Cutters" to basket', async () => {
      await productPage.addToCart();
    });

    await test.step('A Then the basket badge should display an item count of "1"', async () => {
      await expect(productPage.basketBadge).toHaveText('1');
    });
  });
});

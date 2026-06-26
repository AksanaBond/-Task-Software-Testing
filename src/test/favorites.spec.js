import { assert } from 'chai';
import homePage from '../po/pages/home.page';
import productDetailsPage from '../po/pages/product.details.page';
import { Given_user_logged_in } from '../steps/steps';
import favoritesPage from '../po/pages/favorites.page';

describe('Favorite products', () => {
  it('Add product to the favorite list successfully', async () => {
    await Given_user_logged_in();

    await homePage.navbarComponent.homeLink.click();
    await homePage.openProductDetails('Bolt Cutters'); // And the user navigates to the product details page "Bolt Cutters"
    await productDetailsPage.productDetailsComponent.productName.waitForDisplayed();
    await productDetailsPage.addToFavorites(); //When the user adds product «Bolt Cutters» to his favorites
    await homePage.navbarComponent.goToFavorites();

    const favoriteCard =
      await favoritesPage.favoritesCardComponent.getCard('Bolt Cutters');
    const isCardVisible = await favoriteCard.isDisplayed();
    assert.isTrue(
      isCardVisible,
      'The product "Bolt Cutters" was not found in the favorites list'
    );
  });
});

import { assert } from 'chai';
import homePage from '../po/pages/home.page';
import loginPage from '../po/pages/login.page';
import registerPage from '../po/pages/register.page';
import accountComponent from '../po/components/account.component';
import productDetailsPage from '../po/pages/product.details.page';
import { REGISTER_CREDENTIALS } from '../utils/consts';

describe('Favorite products', () => {
  before(async () => {
    await homePage.open();
    await homePage.navbarcomponent.goToSingInPage();
    await loginPage.login(
      REGISTER_CREDENTIALS.email,
      REGISTER_CREDENTIALS.password
    );
  });
  it('Add product to the favorite list successfully', async () => {
    await homePage.navbarcomponent.homeLink.click();
    await homePage.openProductDetails('Bolt Cutters'); // And the user navigates to the product details page "Bolt Cutters"
    await productDetailsPage.productDetailsComponent.productName.waitForDisplayed();
    await productDetailsPage.addToFavourites(); //When the user adds product «Bolt Cutters» to his favorites
    await homePage.navbarcomponent.goToFavorites();

    const favoriteCard = await homePage.cardcomponent.getCard('Bolt Cutters');
    await favoriteCard.waitForDisplayed({ timeout: 5000 });

    // 5. Chai Assertion
    const isCardVisible = await favoriteCard.isDisplayed();
    assert.isTrue(
      isCardVisible,
      'The product "Bolt Cutters" was not found in the favorites list'
    );
  });
});

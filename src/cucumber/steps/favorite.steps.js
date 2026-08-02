import { REGISTER_CREDENTIALS } from '../../utils/consts.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import homePage from '../../po/pages/home.page.js';
import loginPage from '../../po/pages/login.page.js';
import registerPage from '../../po/pages/register.page.js';
import productDetailsPage from '../../po/pages/product.details.page.js';
import favoritesPage from '../../po/pages/favorites.page.js';

Given('the user is logged into his personal account', async () => {
  await registerPage.open();
  await registerPage.register(REGISTER_CREDENTIALS);
  await homePage.open();
  await homePage.navbarComponent.goToSignInPage();
  await loginPage.login(
    REGISTER_CREDENTIALS.email,
    REGISTER_CREDENTIALS.password
  );
  await browser.waitUntil(
    async () => (await browser.getUrl()).endsWith('/account'),
    {
      timeout: 5000,
      timeoutMsg: 'Expected URL to redirect to account page',
    }
  );
  await homePage.navbarComponent.homeLink.click();
});

When('the user adds product {string} to his favorites', async (productName) => {
  await productDetailsPage.addToFavorites();
});

Then('the product appears in the user’s favorites list', async () => {
  await homePage.navbarComponent.goToFavorites();

  const favoriteCard =
    await favoritesPage.favoritesCardComponent.getCard('Bolt Cutters');
  const isCardVisible = await favoriteCard.isDisplayed();
  assert.isTrue(
    isCardVisible,
    'The product "Bolt Cutters" was not found in the favorites list'
  );
});

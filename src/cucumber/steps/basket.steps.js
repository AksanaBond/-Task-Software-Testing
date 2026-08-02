import { When, Then } from '@wdio/cucumber-framework';
import { expect as chaiExpect } from 'chai';
import productDetailsPage from '../../po/pages/product.details.page.js';

When('the user adds product {string} to basket', async (productName) => {
  await productDetailsPage.addProductToCart();
});
Then(
  'the basket badge should display an item count of {string}',
  async (expectedCount) => {
    const badge = productDetailsPage.navbarComponent.cartBadge;
    await badge.waitForDisplayed();
    const textBadge = await badge.getText();
    chaiExpect(textBadge).to.equal(expectedCount);
  }
);

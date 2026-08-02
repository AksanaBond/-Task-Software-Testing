console.log('🟢 Basket steps file loaded!');
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect as chaiExpect } from 'chai';
import homePage from '../../po/pages/home.page.js';
import productDetailsPage from '../../po/pages/product.details.page.js';
console.log('🔍 homePage:', homePage);
console.log('🔍 homePage.open:', typeof homePage.open);
console.log('🔍 productDetailsPage:', productDetailsPage);

Given('the user is on the home page', async () => {
  try {
    console.log('🏠 Opening home page...');
    await homePage.open();
    console.log('✅ Home page opened successfully');
  } catch (error) {
    console.error('❌ Error in "the user is on the home page":', error.message);
    throw error;
  }
});
Given(
  'the user navigates to the product details page {string}',
  async (productName) => {
    await homePage.openProductDetails(productName);
    await productDetailsPage.productDetailsComponent.productName.waitForDisplayed();
  }
);
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

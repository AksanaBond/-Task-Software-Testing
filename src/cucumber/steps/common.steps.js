import { Given } from '@wdio/cucumber-framework';
import homePage from '../../po/pages/home.page.js';
import productDetailsPage from '../../po/pages/product.details.page.js';
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
  'the user navigates to the product details {string}',
  async (productName) => {
    await homePage.openProductDetails(productName);
    await productDetailsPage.productDetailsComponent.productName.waitForDisplayed();
  }
);

import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../../po/pages/home.page.js';
import productDetailsPage from '../../po/pages/product.details.page.js';
import { expect as chaiExpect } from 'chai';

Given('the user is on the login page', async () => {
  await homePage.open();
});

Given(
  'the user navigates to the product details {string}',
  async (productName) => {
    await homePage.openProductDetails(productName);
    await productDetailsPage.productDetailsComponent.productName.waitForDisplayed();
  }
);

When('the user switches the interface language to {string}', async () => {
  await productDetailsPage.navbarComponent.changeLanguage('DE');
  await browser.waitUntil(
    async () => {
      const text = await productDetailsPage.navbarComponent.homeLink.getText();
      return text === 'Start';
    },
    { timeout: 5000, timeoutMsg: 'Language did not switch to German in time' }
  );
});

Then('the application interface should be displayed in German', async () => {
  const homeLinkText = await homePage.navbarComponent.homeLink.getText();
  chaiExpect(homeLinkText).to.equal('Start');
});
Then(
  'the product names and descriptions should remain in English',
  async () => {
    const initialTitle =
      await productDetailsPage.productDetailsComponent.productName.getText();
    const initialDescription =
      await productDetailsPage.productDetailsComponent.productDescription.getText();
    const newTitle =
      await productDetailsPage.productDetailsComponent.productName.getText();
    const newDescription =
      await productDetailsPage.productDetailsComponent.productDescription.getText();
    chaiExpect(newTitle).to.equal(initialTitle);
    chaiExpect(newDescription).to.equal(initialDescription);
  }
);

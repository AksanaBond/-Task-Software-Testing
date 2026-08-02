import { When, Then } from '@wdio/cucumber-framework';
import { expect as chaiExpect } from 'chai';
import homePage from '../../po/pages/home.page.js';

When(
  'the user selects {string} category from the menu',
  async (productName) => {
    await homePage.searchFilterComponent.selectCategory(productName); // When the user selects the "Hammer" category
    await browser.waitUntil(
      async () => {
        const firstProductText = await homePage.productTitles[0].getText();
        return firstProductText
          .toLowerCase()
          .includes(productName.toLowerCase());
      },
      {
        timeout: 5000,
        timeoutMsg: 'Product list did not update to show hammers',
      }
    );
  }
);
Then('the product list is updated to show only filtered items', async () => {
  const productNames = await homePage.getVisibleProductNames();
  productNames.forEach((name) => {
    chaiExpect(name.toLowerCase()).to.include('hammer');
  });
});
Then(
  'the {string} category filter is marked as selected',
  async (productName) => {
    const isHammerChecked =
      await homePage.searchFilterComponent.isCategorySelected(productName);
    chaiExpect(isHammerChecked).to.be.true;
  }
);

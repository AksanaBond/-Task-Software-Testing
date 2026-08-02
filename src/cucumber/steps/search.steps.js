import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import homePage from '../../po/pages/home.page.js';

Given('the user is on the home page', async () => {
  await homePage.open();
});

When('the user searches for the product {string}', async (productName) => {
  await homePage.searchFilterComponent.search(productName);
  await browser.pause(1500);
});

Then(
  'all returned product cards should contain {string} in their title',
  async (expectedText) => {
    const cards = await homePage.searchFilterComponent.getCardsName;

    assert.isAbove(cards.length, 0, 'No products were found');

    for (const card of cards) {
      const cardText = await card.getText();
      assert.include(
        cardText,
        expectedText,
        `The product "${cardText}" is unrelated to the search query`
      );
    }
  }
);

Then('the search results should display relevant products', async () => {
  const cards = await homePage.searchFilterComponent.getCardsName;
  assert.isAbove(
    cards.length,
    0,
    'Expected at least one relevant product in search results'
  );
});
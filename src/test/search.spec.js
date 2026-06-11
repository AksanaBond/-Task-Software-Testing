import homePage from '../po/pages/home.page';
import { assert } from 'chai';

describe('Search for products', () => {
  it('Search for a product using a general keyword', async () => {
    await homePage.open(); // Given the user is on the home page
    await homePage.searchfiltercomponent.search('Claw Hammer'); // When the user searches

    await browser.pause(1500);

    const cards = await homePage.searchfiltercomponent.getCardsName;

    assert.isAbove(cards.length, 0, 'No products were found'); // And multiple relevant products can be displayed

    for (const card of cards) {
      const cardText = await card.getText();
      assert.include(
        // Then all returned product cards should contain "Claw Hammer" in their title
        cardText,
        'Claw Hammer',
        `The product "${cardText}" is unrelated to the search query`
      );
    }
  });
});

describe('Feature: Product categories', () => {
  it('Scenario: select the chosen category', async () => {
    await homePage.open(); // Given the user is on the home page
    // When the user selects "Hand Tools" category from the menu
    await homePage.searchfiltercomponent.getFilterParameter('Hand Tools');
  });
});

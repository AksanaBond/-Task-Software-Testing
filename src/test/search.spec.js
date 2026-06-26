import ProductDetailsComponent from '../po/components/productDetails.component';
import homePage from '../po/pages/home.page';
import { assert, expect as chaiExpect } from 'chai';
import productDetailsPage from '../po/pages/product.details.page';

/* describe('Search for products', () => {
  it('Search for a product using a general keyword', async () => {
    await homePage.open(); // Given the user is on the home page
    await homePage.searchFilterComponent.search('Claw Hammer'); // When the user searches

    await browser.pause(1500);

    const cards = await homePage.searchFilterComponent.getCardsName;

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

describe('Product categories', () => {
  it('should display only filtered products when a category is selected', async () => {
    await homePage.open(); // Given the user is on the home page
    await homePage.searchFilterComponent.selectCategory('Hammer'); // When the user selects the "Hammer" category
    await browser.waitUntil(
      async () => {
        const firstProductText = await homePage.productTitles[0].getText();
        return firstProductText.toLowerCase().includes('hammer');
      },
      {
        timeout: 5000,
        timeoutMsg: 'Product list did not update to show hammers',
      }
    );
    const isHammerChecked =
      await homePage.searchFilterComponent.isCategorySelected('Hammer');
    const productNames = await homePage.getVisibleProductNames();
    productNames.forEach((name) => {
      chaiExpect(name.toLowerCase()).to.include('hammer');
    }); // Then the product list is updated to show only filtered items
    chaiExpect(isHammerChecked).to.be.true; // And the "Hammer" category filter is marked as selected
  });
}); */
describe('Filters & sort products', () => {
  it('Filtering and sorting products by specific criteria', async () => {
    await homePage.open(); // Given the user is on the home page
    //When the user filters products by a specific brand
    await homePage.searchFilterComponent.selectCategory('ForgeFlex Tools');
    //And the user sorts the filtered products by price from low to high
    await homePage.searchFilterComponent.sortBy('value', 'price,asc');
    await browser.pause(1500);
    const productCards = await homePage.searchFilterComponent.getCardsPrice;

    const prices = [];
    for (const card of productCards) {
      const priceText = await card.getText();
      const priceNumber = parseFloat(priceText.replace(/[^0-9.-]+/g, ''));
      prices.push(priceNumber);
    }
    const minPriceOnPage = Math.min(...prices);
    await homePage.openFirstCard();
    chaiExpect(prices[0]).to.equal(minPriceOnPage); // And the first displayed product should be the cheapest one

    const badgeText = await productDetailsPage.getBrandText();
    chaiExpect(badgeText).to.include('ForgeFlex Tools');
  });
});

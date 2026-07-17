import HomePage from '../support/pages/HomePage';
import ProductPage from '../support/pages/ProductPage';
describe('Basket', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Add a product to the basket', () => {
    cy.log('Given the user is on the home page');
    HomePage.navigateToHomePage();
    cy.log(' And the user navigates to the product details page "Bolt Cutters');
    HomePage.navigateToProductPage('Bolt Cutters');
    cy.log('When the user adds product "Bolt Cutters" to basket');
    ProductPage.addToCart();
    cy.log('Then the basket badge should display an item count of "1"');
    ProductPage.verifyCartBadgeCount('1');
  });
});

import HomePage from '../support/pages/HomePage';
describe('Search for products', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Search for a product using a general keyword', () => {
    cy.log('Given the user is on the home page');
    HomePage.navigateToHomePage();
    cy.log('When the user searches for the product');
    HomePage.searchProduct('Claw Hammer');
    cy.log('Then all returned product cards should contain "Claw Hammer" in their title');
    HomePage.verifyProductCardsContain('Claw Hammer');
    cy.log('And multiple relevant products can be displayed');
    HomePage.verifyMultipleProductsDisplayed();
  });
});

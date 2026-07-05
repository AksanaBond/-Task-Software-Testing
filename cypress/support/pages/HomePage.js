import BasePage from './BasePage';
class HomePage extends BasePage {
  elements = {
    searchInput: () => cy.get('[data-test="search-query"]'),
    searchButton: () => cy.get('[data-test="search-submit"]'),
    languageDropdown: () => cy.get('[data-test="language"]'),
    productCards: () => cy.get('.card'),
    productNames: () => cy.get('[data-test="product-name"]'),
    navMenu: () => cy.get('[data-test="nav-menu"]'),
    homeLink: () => cy.get('[data-test="nav-home"]'),
  };
  navigateToHomePage() {
    this.visit('/');
    return this;
  }

  searchProduct(productName) {
    cy.intercept('GET', '**/search?q=*').as('getSearchResults');
    this.elements.searchInput().clear().type(productName);
    this.elements.searchButton().click();
    cy.wait('@getSearchResults');
    return this;
  }

  changeLanguage(language) {
    this.elements.languageDropdown().click();
    cy.contains(language).click();
    return this;
  }

  clickProduct(productName) {
    this.elements.productNames().contains(productName).click();
    return this;
  }
  verifyOnHomePage() {
    cy.url().should('eq', Cypress.config('baseUrl') + '/');
    return this;
  }

  verifyProductCardsContain(text) {
    this.elements.productNames().each(($el) => {
      expect($el.text()).to.include(text);
    });
    return this;
  }

  verifyMultipleProductsDisplayed() {
    this.elements.productCards().should('have.length.greaterThan', 0);
    return this;
  }

  verifyLanguageChanged(expectedLang) {
    // Verify UI elements are in the expected language
    cy.get('body').should('contain', expectedLang);
    return this;
  }
}

export default new HomePage();

export default class BasePage {
  get languageDropdown() {
    return cy.get('[data-test="language-select"]');
  }
  get basketIcon() {
    return cy.get('[data-test="nav-cart"]');
  }
  get basketBadge() {
    return cy.get('[data-test="cart-quantity"]');
  }
  get toastNotification() {
    return cy.get('#toast-container');
  }
  get homeLink() {
    returncy.get('[data-test="nav-home"]');
  }
  get signInLink() {
    return cy.get('[data-test="nav-sign-in"]');
  }

  visit(url) {
    cy.visit(url);
  }
}

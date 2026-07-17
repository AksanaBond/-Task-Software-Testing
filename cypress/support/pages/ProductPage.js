import BasePage from './BasePage';
class ProductPage extends BasePage {
  elements = {
    productTitle: () => cy.get('[data-test="product-name"]'),
    productDescription: () => cy.get('[data-test="product-description"]'),
    addToCartButton: () => cy.get('[data-test="add-to-cart"]'),
    productPrice: () => cy.get('[data-test="unit-price"]'),
  };

  addToCart() {
    this.elements.addToCartButton().click();
    this.toastNotification.should('contain', 'Product added to shopping cart.');
  }

  verifyCartBadgeCount(count) {
    this.basketBadge.should('have.text', count);
  }
}
export default new ProductPage();

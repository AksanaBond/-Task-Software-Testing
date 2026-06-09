import BaseComponent from './common/base.component';

class ProductDetailsComponent extends BaseComponent {
  constructor() {
    super('.col-md-9 .container');
  }
  get productName() {
    $('[data-test="product-name"]');
  }
  get productPrice() {
    return $('[data-test="unit-price"]');
  }
  get addToCartButton() {
    return $('[data-test="add-to-cart"]');
  }
  get addToFavouritesButton() {
    return $('[data-test="add-to-favorites"]');
  }
  async addProductToCart() {
    await this.addToCartButton.click();
  }
  async addToFavourites() {
    await this.addToFavouritesButton.click();
  }
}
export default ProductDetailsComponent;

import BaseComponent from './common/base.component';

class ProductDetailsComponent extends BaseComponent {
  constructor() {
    super('.col-md-9 .container');
  }
  get productName() {
    return $('[data-test="product-name"]');
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
  get productDescription() {
    return $('[data-test="product-description"]');
  }
}
export default ProductDetailsComponent;

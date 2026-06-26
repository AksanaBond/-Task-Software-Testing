import BaseComponent from './common/base.component';

class FavoritesCardComponent extends BaseComponent {
  constructor() {
    super('.card');
  }
  getCard(productName) {
    return this.rootEl.$(
      `.//*[@data-test="product-name" and normalize-space()="${productName}"]`
    );
  }
}
export default FavoritesCardComponent;

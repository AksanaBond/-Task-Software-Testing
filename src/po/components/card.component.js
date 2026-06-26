import BaseComponent from './common/base.component';

class CardComponent extends BaseComponent {
  constructor() {
    super('body');
  }
  getCard(productName) {
    return this.rootEl.$(
      `.//a[starts-with(@data-test, "product-")][.//*[@data-test="product-name" and normalize-space()="${productName}"]]`
    );
  }
}
export default CardComponent;

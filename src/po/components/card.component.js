import BaseComponent from './common/base.component';

class CardComponent extends BaseComponent {
  constructor() {
    super('.col-md-9 .container');
  }
  getCard(productName) {
    return $(
      `//a[contains(@class, "card") and .//*[contains(text(), ${productName})]]`
    );
  }
}
export default CardComponent;

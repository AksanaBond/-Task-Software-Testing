import BaseComponent from './common/base.component';

class CardComponent extends BaseComponent {
  constructor() {
    super('.col-md-9 .container');
  }
  getCard(productName) {
    return $(
      `//a[contains(@class, "card") and .//*[normalize-space(.)="${productName}"]]`
    );
  }
}
export default CardComponent;

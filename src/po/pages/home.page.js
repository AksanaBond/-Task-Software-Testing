import BasePage from './base.page.js';
import NavBarComponent from '../components/common/nav.bar.component.js';
import SearchFilterComponent from '../components/search.filter.component.js';
import CardComponent from '../components/card.component.js';

class HomePage extends BasePage {
  constructor() {
    super('/');
    this.navbarComponent = new NavBarComponent();
    this.searchFilterComponent = new SearchFilterComponent();
    this.cardComponent = new CardComponent();
  }
  get productTitles() {
    return $$('[data-test="product-name"]');
  }
  async openProductDetails(productName) {
    const productCard = await this.cardComponent.getCard(productName);
    await productCard.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: `Product "${productName}" does not loaded`,
    });
    await productCard.click();
  }
  async getVisibleProductNames() {
    const firstTitle = await this.productTitles[0];
    await firstTitle.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: 'empty',
    });
    return await this.productTitles.map(async (el) => await el.getText());
  }
  async openFirstCard() {
    const firstCard = await this.productTitles[0];
    await firstCard.waitForDisplayed({ timeout: 10000 });
    await firstCard.click();
  }
}
export default new HomePage();

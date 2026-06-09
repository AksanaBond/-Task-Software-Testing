import BasePage from './base.page.js';
import NavBarComponent from '../components/common/nav.bar.component.js';
import SearchFilterComponent from '../components/search.filter.component.js';
import CardComponent from '../components/card.component.js';

class HomePage extends BasePage {
  constructor() {
    super('/');
    this.navbarcomponent = new NavBarComponent();
    this.searchfiltercomponent = new SearchFilterComponent();
    this.cardcomponent = new CardComponent();
  }
  async openProductDetails(productName) {
    const productCard = await this.cardcomponent.getCard(productName);
    await productCard.click();
  }
}
export default new HomePage();

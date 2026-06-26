import BasePage from './base.page.js';
import NavBarComponent from '../components/common/nav.bar.component.js';
import SearchFilterComponent from '../components/search.filter.component.js';
import ProductDetailsComponent from '../components/productDetails.component.js';

class ProductDetailsPage extends BasePage {
  constructor() {
    super('/');
    this.navbarComponent = new NavBarComponent();
    this.searchfiltercomponent = new SearchFilterComponent();
    this.productDetailsComponent = new ProductDetailsComponent();
  }

  async addProductToCart() {
    await this.productDetailsComponent.addToCartButton.click();
  }
  async addToFavorites() {
    await this.productDetailsComponent.addToFavouritesButton.click();
  }
  async proceedToCheckout() {
    await this.navbarComponent.cartLink.click();
  }
  async getBrandText() {
    return await this.productDetailsComponent.brandBadge.getText();
  }
}
export default new ProductDetailsPage();

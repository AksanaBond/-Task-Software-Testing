import BasePage from './base.page.js';
import NavBarComponent from '../components/common/nav.bar.component.js';
import FavoritesCardComponent from '../components/favoritesCard.component.js';

class FavoritesPage extends BasePage {
  constructor() {
    super('/');
    this.navbarComponent = new NavBarComponent();
    this.favoritesCardComponent = new FavoritesCardComponent();
  }
}
export default new FavoritesPage();

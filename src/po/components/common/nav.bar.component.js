import BaseComponent from './base.component';

class NavBarComponent extends BaseComponent {
  constructor() {
    super('#navbarSupportedContent');
  }
  get languageDropdown() {
    return $('button[data-test="language-select"]');
  }
  get homeLink() {
    return $('a[data-test="nav-home"]');
  }
  get contactLink() {
    return $('[data-test="nav-contact"]');
  }
  get signInLink() {
    return $('[data-test="nav-sign-in"]');
  }
  get cartLink() {
    return $('[data-test="nav-cart"]');
  }
  get cartBadge() {
    return $('[data-test="cart-quantity"]');
  }
  languageOption(languageCode) {
    return $(
      `//ul[contains(@class, 'dropdown-menu')]//a[contains(text(), '${languageCode}')]`
    );
  }
  async goToSignInPage() {
    await this.signInLink.click();
  }
  async changeLanguage(languageCode) {
    await this.languageDropdown.click();
    const optionToClick = await this.languageOption(languageCode);
    await optionToClick.waitForClickable({ timeout: 3000 });
    await optionToClick.click();
  }
  get userMenuDropdown() {
    return $('[data-test="nav-menu"]');
  }
  async goToFavorites() {
    await this.userMenuDropdown.click();
    const favoritesLink = await $('[data-test="nav-my-favorites"]');
    await favoritesLink.click();
  }
  async goToHome() {
    await this.homeLink.click();
  }
}
export default NavBarComponent;

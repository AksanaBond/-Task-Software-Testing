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
}
export default NavBarComponent;

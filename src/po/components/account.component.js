import BaseComponent from './common/base.component';

class AccountComponent extends BaseComponent {
  constructor() {
    super('div.btn-group-vertical');
  }
  get title() {
    return $('[data-test="page-title"]');
  }
  get favoritesLink() {
    return $('[data-test="nav-favorites"]');
  }
  get profileLink() {
    return $('[data-test="nav-profile"]');
  }
  get invoicesLink() {
    return $('[data-test="nav-invoices"]');
  }
  get messagesLink() {
    return $('[data-test="nav-messages"]');
  }
}
export default new AccountComponent();

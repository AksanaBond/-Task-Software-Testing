import BasePage from './base.page.js';

class LoginPage extends BasePage {
  constructor() {
    super('/');
    this.inputcomponent = new InputComponent();
  }
}
export default new LoginPage();

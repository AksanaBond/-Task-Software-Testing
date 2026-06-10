import BasePage from './base.page.js';
import LoginComponent from '../components/login.component.js';

class LoginPage extends BasePage {
  constructor() {
    super('/');
    this.loginComponent = new LoginComponent();
  }
  async inputEmail(email) {
    await this.loginComponent.emailInput.setValue(email);
  }
  async inputPassword(password) {
    await this.loginComponent.passwordInput.setValue(password);
  }
  async submit() {
    await this.loginComponent.loginButton.click();
  }
  async login(email, password) {
    await this.inputEmail(email);
    await this.inputPassword(password);
    await this.submit();
  }
  async registerYourAccount() {
    await this.loginComponent.registerLink.click();
  }
}
export default new LoginPage();

import BasePage from './base.page.js';
import RegisterComponent from '../components/register.component.js';

class RegisterPage extends BasePage {
  constructor() {
    super('/auth/register');
    this.registerComponent = new RegisterComponent();
  }
  async inputFirstName(firstName) {
    await this.registerComponent.firstNameInput.setValue(firstName);
  }
  async inputLastName(lasttName) {
    await this.registerComponent.lastNameInput.setValue(lasttName);
  }
  async register(register) {
    await this.registerComponent.firstNameInput.setValue(register.firstName);
    await this.registerComponent.lastNameInput.setValue(register.lastName);
    await this.registerComponent.dateOfBirthInput.setValue(
      register.dateOfBirth
    );
    await this.registerComponent.countryInput.selectByVisibleText(
      register.country
    );
    await this.registerComponent.postalCodeInput.setValue(register.postalcode);
    await this.registerComponent.houseNumberInput.setValue(
      register.housenumber
    );
    await this.registerComponent.streetInput.setValue(register.street);
    await this.registerComponent.cityInput.setValue(register.city);
    await this.registerComponent.stateInput.setValue(register.state);
    await this.registerComponent.phoneInput.setValue(register.phone);
    await this.registerComponent.emailInput.setValue(register.email);
    await this.registerComponent.passwordInput.setValue(register.password);
    await this.registerComponent.registerButton.click();
  }
}
export default new RegisterPage();

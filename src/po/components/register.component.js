import BaseComponent from './common/base.component';

class RegisterComponent extends BaseComponent {
  constructor() {
    super('[data-test="login-form"]');
  }
  get firstNameInput() {
    return $('[data-test="first-name"]');
  }
  get lastNameInput() {
    return $('[data-test="last-name"]');
  }
  get dateOfBirthInput() {
    return $('[data-test="dob"]');
  }
  get countryInput() {
    return $('[data-test="country"]');
  }
  get postalCodeInput() {
    return $('[data-test="postal_code"]');
  }
  get houseNumberInput() {
    return $('[data-test="house_number"]');
  }
  get streetInput() {
    return $('[data-test="street"]');
  }
  get cityInput() {
    return $('[data-test="city"]');
  }
  get stateInput() {
    return $('[data-test="state"]');
  }
  get phoneInput() {
    return $('[data-test="phone"]');
  }
  get emailInput() {
    return $('[data-test="email"]');
  }
  get passwordInput() {
    return $('[data-test="password"]');
  }
  get registerButton() {
    return $('[data-test="register-submit"]');
  }
}
export default RegisterComponent;

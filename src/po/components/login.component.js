import BaseComponent from './common/base.component';

class InputComponent extends BaseComponent {
  constructor() {
    super('[data-test="login-form"]');
  }
  get emailInput() {
    return $('[data-test="email"]');
  }
  get passwordInput() {
    return $('[data-test="password"]');
  }
  get loginButton() {
    return $('[data-test="login-submit"]');
  }
}
export default InputComponent;

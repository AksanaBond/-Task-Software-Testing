import BaseComponent from './common/base.component';

class LoginComponent extends BaseComponent {
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
  get registerLink() {
    return $('[data-test="register-link"]');
  }
}
export default LoginComponent;

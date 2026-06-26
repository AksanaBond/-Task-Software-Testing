import BasePage from './base.page.js';
class CheckoutPage extends BasePage {
  constructor() {
    super('/');
  }
  get btnProceedToCheckout() {
    return $('[data-test="proceed-1"]');
  }
  get btnProceedToCheckout2() {
    return $('[data-test="proceed-2"]');
  }
  get btnProceedToCheckout3() {
    return $('[data-test="proceed-3"]');
  }
  get inputAddress() {
    return $('[data-test="street"]');
  }
  get inputCity() {
    return $('[data-test="city"]');
  }
  get inputState() {
    return $('[data-test="state"]');
  }
  get inputCountry() {
    return $('[data-test="country"]');
  }
  get inputPostcode() {
    return $('[data-test="postal_code"]');
  }
  get inputHouse() {
    return $('[data-test="house_number"]');
  }
  get inputPayment() {
    return $('[data-test="payment-method"]');
  }
  get btnConfirmOrder() {
    return $('[data-test="finish"]');
  }
  get successMessage() {
    return $('#order-confirmation');
  }
  get paymentSuccessMessage() {
    return $('[data-test="payment-success-message"]');
  }

  async completeCheckoutFlow(parameters) {
    await this.btnProceedToCheckout.click();
    await this.btnProceedToCheckout2.click();

    await this.inputCountry.selectByVisibleText(parameters.country);
    await this.inputPostcode.setValue(parameters.postalcode);
    await this.inputHouse.setValue(parameters.housenumber);
    await this.inputAddress.setValue(parameters.street);
    await this.inputCity.setValue(parameters.city);
    await this.inputState.setValue(parameters.state);
    await this.btnProceedToCheckout3.click();
    await this.inputPayment.selectByVisibleText(parameters.payment);

    await this.clickConfirm();

    await this.paymentSuccessMessage.waitForDisplayed({ timeout: 5000 });

    await this.clickConfirm();
  }

  async clickConfirm() {
    await this.btnConfirmOrder.waitForClickable({ timeout: 5000 });
    await this.btnConfirmOrder.click();
  }

  async getPaymentSuccessMessage() {
    await this.paymentSuccessMessage.waitForDisplayed({ timeout: 5000 });

    return await this.paymentSuccessMessage.getText();
  }

  async getSuccessMessageText() {
    await this.successMessage.waitForDisplayed({ timeout: 5000 });
    return await this.successMessage.getText();
  }
}
export default new CheckoutPage();

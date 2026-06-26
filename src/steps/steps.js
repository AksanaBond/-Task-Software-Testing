import { expect, browser } from '@wdio/globals';
import homePage from '../po/pages/home.page';
import loginPage from '../po/pages/login.page';
import productDetailsPage from '../po/pages/product.details.page';
import checkoutPage from '../po/pages/checkout.page';
import registerPage from '../po/pages/register.page';
import accountComponent from '../po/components/account.component';
import { REGISTER_CREDENTIALS } from '../utils/consts';

// Given  the user is on the login page
export const Given_user_on_login_page = async () => {
  await homePage.open();
  await homePage.navbarComponent.goToSignInPage();
};

// Given the user is logged into his personal account
export const Given_user_logged_in = async () => {
  await Given_user_has_account();
  await Given_user_on_login_page();
  await loginPage.login(
    REGISTER_CREDENTIALS.email,
    REGISTER_CREDENTIALS.password
  );
  await browser.waitUntil(
    async () => (await browser.getUrl()).endsWith('/account'),
    {
      timeout: 5000,
      timeoutMsg: 'Expected URL to redirect to account page',
    }
  );
};

// When the user adds "productName" product to the basket
export const When_user_adds_product_to_basket = async (productName) => {
  await homePage.navbarComponent.goToHome();
  await homePage.openProductDetails(productName);
  await productDetailsPage.productDetailsComponent.productName.waitForDisplayed();
  await productDetailsPage.addProductToCart();
};

// When the user completes check out flow with valid details
export const When_user_completes_checkout_flow_with_valid_details =
  async () => {
    await productDetailsPage.proceedToCheckout();
    await checkoutPage.completeCheckoutFlow(REGISTER_CREDENTIALS);
  };

// Given the user has a registered account
export const Given_user_has_account = async () => {
  await registerPage.open();
  await registerPage.register(REGISTER_CREDENTIALS);
};

// When the user enters a valid registered email address and password
export const When_user_enters_email_password = async () => {
  await loginPage.login(
    REGISTER_CREDENTIALS.email,
    REGISTER_CREDENTIALS.password
  );
};

// Then the user should be successfully redirected to his account page
export const Then_user_should_be_redirected_to_account_page = async () => {
  await expect(accountComponent.title).toHaveText('My account');
};

// Then a success message should be displayed on the checkout page
export const Then_success_message_should_be_displayed_on_checkout_page =
  async () => {
    const messageText = await checkoutPage.getSuccessMessageText();
    messageText.should.include(
      'Thanks for your order',
      'Success message was not displayed'
    );
  };

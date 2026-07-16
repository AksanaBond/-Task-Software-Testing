import { expect, test } from './fixtures/test_fixtures';

import { REGISTER_CREDENTIALS } from './utils/const';

test.describe('User Sign in', () => {
  test('Successful sign in with valid credentials', async ({
    page,
    homePage,
    loginPage,
    registerPage,
    accountPage,
  }) => {
    await test.step('Given the user is on the login page', async () => {
      await homePage.navigateToHomePage();
      await homePage.verifyHomePageDisplayed();
      await homePage.navigateToLoginPage();
    });

    await test.step('And the user has a registered account', async () => {
      await loginPage.verifyLoginPageDisplayed();
      await loginPage.navigateToRegisterPage();
      await registerPage.registerUser(REGISTER_CREDENTIALS);
    });

    await test.step('When the user logs in with valid credentials', async () => {
      await loginPage.login(REGISTER_CREDENTIALS);
    });

    await test.step('Then the user should be redirected to their account page', async () => {
      //   await expect(page).toHaveURL(/.*\/account/);
      await accountPage.verifyAccountPageDisplayed();
      await expect(accountPage.title).toBeVisible();
    });
  });
});

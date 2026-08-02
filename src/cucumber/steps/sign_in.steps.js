import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import homePage from '../../po/pages/home.page.js';
import loginPage from '../../po/pages/login.page.js';
import registerPage from '../../po/pages/register.page.js';
import accountComponent from '../../po/components/account.component.js';
import { REGISTER_CREDENTIALS } from '../../utils/consts.js';

Given('the user is on the login page', async () => {
  await homePage.open();
  await homePage.navbarComponent.goToSignInPage();
});

Given('the user has a registered account', async () => {
  await registerPage.open();
  await registerPage.register(REGISTER_CREDENTIALS);
  // Wait for registration to complete before proceeding
  await browser.waitUntil(
    async () => {
      const url = await browser.getUrl();
      return url.includes('/auth/login');
    },
    {
      timeout: 10000,
      timeoutMsg: 'Registration did not redirect to login page in time',
    }
  );
});

When('the user logs in with valid credentials', async () => {
  await loginPage.login(
    REGISTER_CREDENTIALS.email,
    REGISTER_CREDENTIALS.password
  );
});

Then('the user should be redirected to their account page', async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes('/account'),
    {
      timeout: 10000,
      timeoutMsg: 'Expected URL to redirect to account page',
    }
  );
  await expect(accountComponent.title).toHaveText('My account');
});

import homePage from '../po/pages/home.page';
import loginPage from '../po/pages/login.page';
import registerPage from '../po/pages/register.page';
import accountComponent from '../po/components/account.component';
import { REGISTER_CREDENTIALS } from '../utils/consts';

describe('Login Feature', () => {
  it('Successful sign in with valid credentials', async () => {
    await homePage.open();
    await homePage.navbarcomponent.goToSingInPage(); // Given  the user is on the login page
    //await loginPage.registerYourAccount();
    //await registerPage.register(REGISTER_CREDENTIALS); // And the user has a registered account
    await loginPage.login(
      REGISTER_CREDENTIALS.email,
      REGISTER_CREDENTIALS.password
    ); // When the user enters a valid registered email address and password
    await expect(accountComponent.title).toHaveText('My account'); // Then the user should be successfully redirected to his account page
  });
});

import {
  Given_user_has_account,
  Given_user_on_login_page,
  When_user_enters_email_password,
  Then_user_should_be_redirected_to_account_page,
} from '../steps/steps';

describe('Login Feature', () => {
  it('Successful sign in with valid credentials', async () => {
    await Given_user_has_account();
    await Given_user_on_login_page();

    await When_user_enters_email_password();

    await Then_user_should_be_redirected_to_account_page();
  });
});

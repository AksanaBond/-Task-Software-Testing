import {
  When_user_adds_product_to_basket,
  When_user_completes_checkout_flow_with_valid_details,
  Given_user_logged_in,
  Then_success_message_should_be_displayed_on_checkout_page,
} from '../steps/steps';

describe('Checkout', () => {
  it('Successful purchase process', async () => {
    await Given_user_logged_in();

    await When_user_adds_product_to_basket('Bolt Cutters');

    await When_user_completes_checkout_flow_with_valid_details();

    await Then_success_message_should_be_displayed_on_checkout_page();
  });
});

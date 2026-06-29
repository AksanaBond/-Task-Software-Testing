import {
  And_the_user_navigates_to_the_product_details,
  Given_the_user_is_on_the_home_page,
  When_the_user_switches_the_interface_language_to,
  Then_the_interface_of_the_application_should_be_successfully_switched,
  And_the_product_names_and_descriptions_should_remain_in,
} from '../steps/steps';

describe('Switch the interface language', () => {
  it('should switch the interface language successfully', async () => {
    await Given_the_user_is_on_the_home_page();
    await And_the_user_navigates_to_the_product_details('Bolt Cutters');
    await When_the_user_switches_the_interface_language_to();
    await Then_the_interface_of_the_application_should_be_successfully_switched();
    await And_the_product_names_and_descriptions_should_remain_in();
  });
});

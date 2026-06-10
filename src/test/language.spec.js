import homePage from '../po/pages/home.page';
import productDetailsPage from '../po/pages/product.details.page';

describe('Switch the interface language', () => {
  it('should switch the interface language successfully', async () => {
    await homePage.open(); // Given  the user is on the home page
    await homePage.navbarcomponent.changeLanguage('DE'); // When the user switches the interface language to "Deutsch"
    await expect(homePage.navbarcomponent.homeLink).toHaveText('Start'); //Then the interface of the application should be successfully switched to German
    //And the product names and descriptions should remain in English
  });
});

import homePage from '../po/pages/home.page';
import productDetailsPage from '../po/pages/product.details.page';
import { expect as chaiExpect } from 'chai';

describe('Switch the interface language', () => {
  it('should switch the interface language successfully', async () => {
    await homePage.open(); // Given  the user is on the home page
    await homePage.openProductDetails('Bolt Cutters'); // And the user navigates to the product details page "Bolt Cutters"
    const initialTitle =
      await productDetailsPage.productDetailsComponent.productName.getText();
    const initialDescription =
      await productDetailsPage.productDetailsComponent.productDescription.getText();
    await productDetailsPage.navbarComponent.changeLanguage('DE'); // When the user switches the interface language to "Deutsch"
    await browser.waitUntil(
      async () => {
        const text =
          await productDetailsPage.navbarComponent.homeLink.getText();
        return text === 'Start';
      },
      { timeout: 5000, timeoutMsg: 'Language did not switch to German in time' }
    );
    const homeLinkText = await homePage.navbarComponent.homeLink.getText();
    const newTitle =
      await productDetailsPage.productDetailsComponent.productName.getText();
    const newDescription =
      await productDetailsPage.productDetailsComponent.productDescription.getText();
    chaiExpect(homeLinkText).to.equal('Start'); //Then the interface of the application should be successfully switched to German
    chaiExpect(newTitle).to.equal(initialTitle); //And the product names and descriptions should remain in English
    chaiExpect(newDescription).to.equal(initialDescription);
  });
});

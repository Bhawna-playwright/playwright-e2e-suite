import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test.describe('Login Feature', () => {

  test('User should login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.validUser.email,
      users.validUser.password
    );

    await loginPage.verifySuccessfulLogin();
  });

});
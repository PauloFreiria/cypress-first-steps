import userData from '../fixtures/users/userData.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login Orange HRM Test', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
  })

  it('Login - Failure', () => {   
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFailure.username, userData.userFailure.password);
    loginPage.checkLoginError();

  })

})
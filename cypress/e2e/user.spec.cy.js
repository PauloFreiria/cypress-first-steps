import userData from '../fixtures/users/userData.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';



const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const myInfoPage = new MyInfoPage();
const menuPage = new MenuPage();


describe('Orange HRM Test', () => {

  it.only('User Info Update - Success', () => {

    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

    dashboardPage.checkDashboardPage();

    menuPage.accessMyInfo();

    myInfoPage.fillPersonDetails('FirstName', 'MiddleName', 'LastName');
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', 'DL123456', '2025-06-26');
    myInfoPage.fillPersonStatus('1990-09-22');
    myInfoPage.customFields('TEXTOTESTE');
    myInfoPage.saveForm();


  })

  it('Login - Failure', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
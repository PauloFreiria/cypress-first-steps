import userData from '../fixtures/users/userData.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MyInfoPage from '../pages/myInfoPage';
import MenuPage from '../pages/menuPage';


const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const myInfoPage = new MyInfoPage();
const menuPage = new MenuPage();


describe('Orange HRM Test', () => {

  it.only('User Info Update - Success', () => {

    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

    dashboardPage.checkDashboardPage();
    dashboardPage.myInfoHUD();

    menuPage.accessMyInfo();


    myInfoPage.accessMyInfoPage();
    myInfoPage.personalInformation();
 
  })

  it('Login - Failure', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
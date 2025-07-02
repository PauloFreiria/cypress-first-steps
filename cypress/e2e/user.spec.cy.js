import userData from '../fixtures/users/userData.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const myInfoPage = new MyInfoPage();
const menuPage = new MenuPage();

describe('Orange HRM Test', () => {

  it('User Info Update', () => {

    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

    dashboardPage.checkDashboardPage();

    menuPage.accessMyInfo();

    myInfoPage.fillPersonDetails(chance.first(), chance.name({ middle: true }), chance.last());
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', 'DL123456', '2025-06-26');
    myInfoPage.fillPersonStatus('1990-09-22');
    myInfoPage.customFields('TextoTeste');
    myInfoPage.saveForm();

  })

})
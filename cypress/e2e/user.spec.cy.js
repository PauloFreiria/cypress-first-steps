import userData from '../fixtures/users/userData.json';


describe('Orange HRM Test', () => {


  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".oxd-layout-context",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
    
  }


  it.only('User Info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeT')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIDTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

  })

  it('Login - Failure', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
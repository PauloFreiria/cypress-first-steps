class DashboardPage {

    selectorsList() {
        const selectors = {

             dashboardGrid: ".oxd-layout-context",
             myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }    



    myInfoHUD() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

}

export default DashboardPage
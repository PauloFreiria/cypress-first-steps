class MyInfoPage {
    
    selectorsList() {
        const selectors = {

            
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            dropdownField: "[clear='false']",
            genderField: ".oxd-radio-wrapper",
            bloodTypeField: "[tabindex='0']",
            testFieldField: "[options='']",

        }

        return selectors
    }


    accessMyInfoPage() {
        cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    }  



    personalInformation () {       
        
        cy.get(this.selectorsList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorsList().middleNameField).clear().type('MiddleNameTest')
        cy.get(this.selectorsList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('EmployeeT')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIDTest')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriversLicenseTest')
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-03-10')
        cy.get(this.selectorsList().dateCloseButton).click()

        cy.get(this.selectorsList().dropdownField).eq(0).click()
        cy.get(':nth-child(107) > span').click() // Select a nation from the dropdown
        cy.get(this.selectorsList().dropdownField).eq(1).click()
        cy.get(':nth-child(3) > span').click() // Select a marital status from the dropdown

        cy.get(this.selectorsList().dateField).eq(1).clear().type('1990-22-09')

        cy.get(this.selectorsList().genderField).eq(0).click() // Select male

        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

        cy.get(this.selectorsList().bloodTypeField).eq(2).click() // Select a blood type from the dropdown
        cy.get('.oxd-select-dropdown > :nth-child(7)').click() // Select a blood type from the dropdown
        cy.get(this.selectorsList().testFieldField).clear().type('TestField') // Type in a custom field
        cy.get(this.selectorsList().saveButton).eq(1).click()
        cy.get('.oxd-toast-close')

    }

}


export default MyInfoPage
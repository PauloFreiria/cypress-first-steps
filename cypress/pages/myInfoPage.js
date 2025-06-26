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
            selectNation: ".oxd-select-dropdown > :nth-child(2)",
            selectMarital: ".oxd-select-dropdown > :nth-child(3)",
            genderField: ".oxd-radio-wrapper",
            bloodTypeField: "[tabindex='0']",
            bloodTypeOption: ".oxd-select-dropdown > :nth-child(5)",
            testFieldField: "[options='']",

        }

        return selectors

    }





    saveForm () {
        cy.get(this.selectorsList().saveButton).eq(0).click()  // Click the save button
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }


    fillPersonDetails (firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }

    fillEmployeeDetails (employeeId, otherId, driversLicenseNumber, expireDate) {

        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expireDate) // Type in the expiration date
        cy.get(this.selectorsList().dateCloseButton).click()

    }


    fillPersonStatus (birthDate) {

        cy.get(this.selectorsList().dropdownField).eq(0).click()
        cy.get(this.selectorsList().selectNation).click()
        cy.get(this.selectorsList().dropdownField).eq(1).click()
        cy.get(this.selectorsList().selectMarital).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthDate)
        cy.get(this.selectorsList().genderField).eq(0).click()

    }


    customFields (fieldTest) {       
        
        cy.get(this.selectorsList().bloodTypeField).eq(2).click() // Select a blood type from the dropdown
        cy.get(this.selectorsList().bloodTypeOption).eq(0).click() // Click on the first option in the dropdown
        cy.get(this.selectorsList().testFieldField).click().clear().type(fieldTest) // Type in a custom field

    }

}


export default MyInfoPage
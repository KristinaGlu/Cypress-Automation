describe('DOM Elements', () => {

    it('Elements', () => {

        cy.visit('https://naveenautomationlabs.com/opencart/')

        cy.get('.image').first().click()

        //cy.get('.image').last().click()

        //cy.get('.image').eq(2).click()
        
    })



})
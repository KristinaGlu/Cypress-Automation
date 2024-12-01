describe('Retry rerun suite', () => {

    it('Retry rerun test', {retries: 4}, () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('prd')
        cy.get('@prd').find('.product').should('have.length',4)

    })
})
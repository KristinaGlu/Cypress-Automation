describe('ViewPort test', () => {

    it('ViewPort Test1', () => {


        cy.viewport(990,760)
        cy.visit('https://www.amazon.com/')
    })


    it('ViewPort Test2', () => {

        cy.viewport('macbook-15') //docs.cypress.io/api/commands/viewport
        cy.visit('https://www.amazon.com/')
    })



    it('ViewPort Test3', () => {

        cy.viewport('macbook-15', 'landscape') //docs.cypress.io/api/commands/viewport
        cy.visit('https://www.amazon.com/')
    })


})
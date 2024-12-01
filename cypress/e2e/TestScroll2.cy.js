describe('Scroll Test' , () => {

    it('Scroll Test', () => {

        cy.visit('https://codenboxautomationlab.com/')
        cy.wait(3000)
        cy.contains('Contact Us').scrollIntoView()
        cy.wait(3000)
        cy.get('h2.has-text-align-center.has-text-color').scrollIntoView()

    })

})
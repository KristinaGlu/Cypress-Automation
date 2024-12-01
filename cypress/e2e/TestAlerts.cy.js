describe('Alerts' , () => {

    it('Js Alerts', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert') //Explicit BDD Assertion
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    // Ok and Cancel button


    it('Js Confirm Alert - OK' , () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm') 
        })

        cy.get('#result').should('have.text','You clicked: Ok')
    })


    it('Js Confirm Alert - Cancel' , () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm') 
        })
        cy.on('window:confirm', () =>false)
        cy.get('#result').should('have.text','You clicked: Cancel')
    })


    it('Js Prompt Alert' , () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get('#result').should('have.text','You entered: welcome')
    })


    it('Authenticated Alert' , () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get("div[class='example'] h3 ").should('have.contain', 'Basic')
    })

})
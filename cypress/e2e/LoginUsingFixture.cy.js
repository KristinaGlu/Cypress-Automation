describe('Automation Using Cypress || Fixtures', () => {

    let data

    beforeEach(() => {

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login') // open website
        cy.fixture('login').then((value) => { //load the data from the login.json file present inside the fixtures
            data = value
        })

    })

    // start the test case
    it('Login into the application using fixture data', () => {

        cy.get('input[name="email"]').type(data.email) //enter the email
        cy.get('input[name="password"]').type(data.password) // enter the password
        cy.get('input[type="submit"]').click() //click on submit button
    })
})
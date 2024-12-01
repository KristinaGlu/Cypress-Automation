import Login from "../PageObjects/LoginPage.js";
describe('POM', () => {

    it('LoginTest', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[placeholder='Password']").type('Admin')
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })

    it.only('LoginTest with POM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln = new Login()
        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit()
        ln.veryfyLogin()
    })

    it('Login Test with Fixture File', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('LoginPage').then((data) => {

            const  ln = new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.veryfyLogin()
        })
    })
})
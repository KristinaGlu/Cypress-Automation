describe('Custom Commands', () =>{

    it.only('Login comand', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.loginapp("Admin", "admin123")

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })
})
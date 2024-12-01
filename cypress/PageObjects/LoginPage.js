class Login
{
    textUsername="input[placeholder='Username']"
    textPassword="input[placeholder='Password']"
    btnSubmit="button[type='submit']"
    lblmsg='.ocd-topbar-header-breadcrumb > .oxd-text'
    forgotpassword='.orangehrm-login-forgot > .oxd-text'

    setUserName(username)
    {
        cy.get(this.txtUsername).type(username)
    }


    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }


    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }


    veryfyLogin()
    {
        cy.get(this.lblmsg).should('have.text', 'Dashboard')
    
    }

    forgotpassword()
    {
        cy.get(this.forgotpassword).click()
    }

}
export default Login; 

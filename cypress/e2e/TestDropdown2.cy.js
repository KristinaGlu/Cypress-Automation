describe('Dropdown Test', () => {

    it('Dropdown', () => {

        cy.visit('https://example.cypress.io/commands/actions')

        /*cy.get('select.action-select').select(2)*/

        cy.get('select.action-select').select('bananas') // better to use text, not number, because on the second place can be another product

        /*cy.get('select.action-select').select('fr-bananas')*/

    })

    it('Dropdown', () => {

        cy.visit('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')

        cy.get('#menu1').click()

        cy.get('a[role="menuitem"]').each(function($ele,index,list)
    
    {
        cy.log($ele.text())
        if($ele.text()==='Java Script')
        {
            cy.log("Found Element")
            cy.wait(6000)
            //cy.click($ele,{force: true} )
            //cy.wrap($ele).click({force: true}) 
            $ele.trigger("click")
            cy.title().should('include','Automation')
        }   
        else{
            cy.log('Current Value', $ele.text())
        }
           

    })


    })


})
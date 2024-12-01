describe('CY Test', () => {
    it('Test1', () => {

         //We specify the website we need to visit via the command cy.visit(website link)
         cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    
         //In the 'search box' we are serching "ca"
         cy.get('.search-keyword').type('ca')
         //we are expect 4 elements
         //cy.get('product')should('have lenghth', 4)-will be fail, because we have 5 elements in the page
         cy.get('.product:visible').should('have.length',4) //we have only 4 visible elements
         //searching for how many children parent has
         cy.get('.products').as('prd')//shortened the word products to prd
         cy.get('@prd').find('.product').should('have.length',4)

         //Parent child chaining
         //Index starts from 0, eq(1) means the second product (second element in the array).when it finds this product, add to chart, log text
         cy.get('@prd').find('.product').eq(1).contains('add to CarT', {matchCase: false}).click()
         cy.log('Add to Card button was clicked successfully') //cy.log is a confirmation and explanation of the previous line

         //.each means loop, it will run through the list of products one by one and will found what i am looking for .each($el first element, index posotion 0, $list toal number of elements)
         cy.get('@prd').find('.product').each(($el,index,$list) => {
         //when we start the loop we need to provide some info
         const textveg=$el.find('.product-name').text() //textveg contsins Cauliflower - 1kg
         cy.log(textveg)

         if(textveg.includes('Carrot')) //condition . if you have "if" and you have to perfom some action it should be written inside{}
         {
            cy.wrap($el).find('button').click() //action if the condition is satisfied. cy.wrap mens go to the previous element
         }
        })

         cy.get('.brand.greenLogo').should('have.text','GREENKART')

         cy.get('.brand').then(function(logo)
         {
            cy.log(logo.text())

        })

          cy.get('.cart-icon > img').click()
          cy.contains('PROCEED TO CHECKOUT').click()
          cy.contains('Place Order').click()

    })
})

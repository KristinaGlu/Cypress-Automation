describe('Web table', () => {

    it('Web Table', () =>  {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('table[name=BookTable]').contains('td', 'JAVA').should('be.visible')

        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        cy.get('table[name=BookTable] > tbody > tr:nth-child(1) > th:nth-child(3)').contains('Subject').should('be.visible')
    

        cy.get('table[name=BookTable] > tbody >tr:nth-child(2)').each(($e,index,$list) => {

            const text = $e.text()
            if(text.includes('Amod'))
            {
                cy.get('table[name=BookTable] > tbody >tr td:nth-child(1)').eq(index).then(function(bname)
                {
                    const bookname=bname.text()
                    expect(bookname).to.equal("Master in Java")
                })


            }



        })




    })
})
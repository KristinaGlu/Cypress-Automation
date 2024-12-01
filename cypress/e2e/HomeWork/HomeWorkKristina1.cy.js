describe('XYZ Bank Application Home Work Test', () => {
    it('Test', () =>{

        //1. Open the website
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        //2. Confirm the Title of the page is XYZ Bank
        cy.title().should('eq', 'XYZ Bank')

        //3. Click on Customer Login
        cy.contains('Customer Login').click()

        //4. Choose any Name from the Your Name drop down (I chose Harry Potter)
        cy.get('select').select('Harry Potter')

        //5. Click on Login
        cy.get('button[class="btn btn-default"]').click()

        //6. Write an assertion to confirm the Name selected in Step 4 is displayed after Welcome
        cy.contains('Welcome Harry Potter').should('be.visible')

        //7. Confirm the Currency is Dollar (Use Assertion)
        cy.contains('Currency : Dollar').should('be.visible')

        //8. Click on Deposit
        cy.get('.btn.btn-lg.tab[ng-class="btnClass2"]').click()
        
        //9. Enter the amount in Amount to be Deposited textbox
        const depositAmount = 2000
        cy.get('input[ng-model="amount"]').type(depositAmount)

        //10. Click on Deposit
        cy.get("button[type='submit']").click()

        //11. Confirm "Deposit Successful" is displayed
        cy.get('.error.ng-binding').should('have.text', 'Deposit Successful')

        //12. Click on Transactions
        cy.get('.btn.btn-lg.tab[ng-class="btnClass1"]').click()

        //13. Confirm the amount entered in Step 9 is displayed under Amount column
        cy.get('td').contains(depositAmount).should('exist')

        //14. Confirm the Transaction Type is credit
        cy.get('td[class="ng-binding"]').eq(2).contains('Credit')

        //15. Click on Back button
        cy.get('button[ng-click="back()"]').click()

        //16. Click on Withdrawl
        cy.get('.btn.btn-lg.tab[ng-class="btnClass3"]').click()

        //17. Enter the same amount you deposited
        cy.get('input[ng-model="amount"]').type(depositAmount)

        //18. Click on Withdrawl
        cy.get("button[type='submit']").click()

        //19. Confirm "Transaction Successful" is displayed
        cy.get('.error.ng-binding').should('have.text', 'Transaction successful')

        //20. Click on Transactions
        cy.get('.btn.btn-lg.tab[ng-class="btnClass1"]').click()
        
        //21. Confirm there is one more row with Transaction Type is debit
        cy.get('tr').should('have.length', 3)
        cy.get('tr').eq(2).find('td').eq(2).should('contain', 'Debit')

    })
    })
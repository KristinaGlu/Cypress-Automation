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
        cy.contains('Login').click()

        //6. Write an assertion to confirm the Name selected in Step 4 is displayed after Welcome
        cy.contains('Welcome Harry Potter').should('be.visible')

        //7. Confirm the Currency is Dollar (Use Assertion)
        cy.contains('Currency : Dollar').should('be.visible')

        //8. Click on Deposit
        cy.contains('Deposit').click()

        //9. Enter the amount in Amount to be Deposited textbox
        const depositAmount = 2000
        cy.get('input[ng-model="amount"]').type(depositAmount) 

        //10. Click on Deposit
        cy.get("button[type='submit']").click() //botton type='submit' i found in the elements on website. I right-clicked on the button "Deposit" and I pressed inspect.

        //11. Confirm "Deposit Successful" is displayed
        cy.contains('Deposit Successful').should('be.visible')
        
        //12. Click on Transactions
        cy.contains('Transactions').click()

        //13. Confirm the amount entered in Step 9 is displayed under Amount column
        cy.get('td').contains(depositAmount).should('exist')

        //14. Confirm the Transaction Type is credit
        cy.get('tr')
        .contains(depositAmount) //Finding the row containing the deposit amount
        .parent() //Getting the parent row of the found amount cell
        .find('td') //Finding all the columns in a row
        .eq(2) //"Transaction Type" is in the third column (index 2)
        .should('contain', 'Credit') //// Asserting the transaction type is 'Credit'

        //15. Click on Back button
        cy.contains('Back').click()

        //16. Click on Withdrawl
        cy.contains('Withdrawl').click()

        //17. Enter the same amount you deposited
        //cy.get('input[ng-model="amount"]').type(depositAmount) //ng-model='amount' i found in the elements on website.
        const amountToWithdrawl = 2000 //Same amount as deposited
        cy.get('input[ng-model="amount"]').type(amountToWithdrawl)

        //18. Click on Withdrawl
        cy.get("button[type='submit']").click()

        //19. Confirm "Transaction Successful" is displayed
        cy.contains('Transaction successful').should('be.visible')

        //20. Click on Transactions
        cy.contains('Transactions').click()
        
        //21. Confirm there is one more row with Transaction Type is debit
        cy.get('tr').should('have.length', 3) // Expecting 3 rows: 1 header row + 1 credit transaction + 1 debit transaction

        cy.get('tr')
        .eq(2) // Getting the third horisontal row (index 2)
        .find('td') //Getting all columns in that row
        .eq(2) // Assuming the 'Transaction Type' column is the third column (index 2)
        .should('contain', 'Debit') // Assert that the Transaction Type for this row is 'Debit'

    })
})
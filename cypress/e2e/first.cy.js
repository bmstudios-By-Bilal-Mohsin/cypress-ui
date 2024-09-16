context('Launch my app', ()=> {

    specify('app testing', ()=>{
        
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get(':nth-child(5) > .button').click()
        cy.get('.error').should('exist')
        cy.wait(100)
        cy.get('.leftmenu > :nth-child(6) > a').click()
        cy.get('#loanProvider').select('JMS')

  

        // cy.get('[data-test="username"]').click().type('standard_user')
        // cy.get('[data-test="password"]').click().type('secret_sauce')
        // cy.get('[data-test="login-button"]').click()
    })
})
context('Launch my app', ()=> {

    specify('app testing', ()=>{
        
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').click().clear().type('Hi{backspace}')

        
    })
})
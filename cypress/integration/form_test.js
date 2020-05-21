describe('Form inputs', () => {
    it('can navigate to the site', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
    })
  
    it('button is disabled', () => {
      cy.get('button.submit')
        .should('be.disabled')
    })
  
    it('can type a name', () => {
      cy.get('input[name="name"]')
        .type('Stephen Gary')
        .should('have.value', 'Stephen Gary')
    })
  
    it('can type an email', () => {
      cy.get('input[name="email"]')
        .type('sgary0@protonmail.com')
        .should('have.value', 'sgary0@protonmail.com')
    })

    it('can type an password', () => {
        cy.get('input[name="password"]')
          .type('psswrd')
          .should('have.value', 'psswrd')
      })
  
    it('can check terms', () => {
      cy.get('input[name="terms"]').check()
    })
  
    it('submit button not disabled any more', () => {
      cy.get('button.submit')
        .should('not.be.disabled')
    })
  })
  
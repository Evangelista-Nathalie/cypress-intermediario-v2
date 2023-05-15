describe('Login', () => {

  it('Realizando login com sucesso', () => {
    cy.login()

    cy.contains('Welcome to GitLab')
      .should('be.visible')
    cy.get('.qa-user-avatar')
      .should('be.visible')
    })

})

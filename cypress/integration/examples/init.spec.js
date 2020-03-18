describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true)
  })

  it('visits the app', () => {
    cy.visit('http://localhost:3000')
  })

  it('deletes an item', () => {
    cy.get('.delete-btn')
      .first()
      .click()
      .get('.delete-btn')
      .should('have.length', 4)
  })
})

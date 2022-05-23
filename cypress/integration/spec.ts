describe('Modal Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.wait(8000)
    cy.get('button').click()
    cy.wait(8000)
    cy.contains('Cancel').click()
    cy.wait(8000)
  })
})

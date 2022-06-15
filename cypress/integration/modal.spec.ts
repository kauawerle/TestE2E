
describe('Modal Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.wait(4000)
    cy.get('button').click()
    cy.wait(4000)
    cy.contains('Cancel').click()
    cy.wait(4000)
    cy.get('button').click()
    cy.contains('Ok').click()
    cy.wait(4000)
    cy.contains('Conectar').click()
  })
})

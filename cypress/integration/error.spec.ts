
describe('Error Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('button').click()
    cy.wait(4000)
    cy.contains('ErrorTest').click()
    cy.wait(4000)
    cy.debug();
  })
})



describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('TestsE2e')
    cy.title()
    cy.wait(4000)
  })
})

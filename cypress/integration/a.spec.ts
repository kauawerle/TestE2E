/// <reference types="cypress"/>

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('TestsE2e')
    expect(2).to.equal(2)
    cy.title()
    cy.wait(4000)
  })
})

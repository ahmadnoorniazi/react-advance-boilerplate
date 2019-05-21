/// <reference types="Cypress" />

/* globals cy */

describe('login', () => {
  it('should ', () => {
    /* With cypress testing library */

    // cy.visit('/login')
    //   .getByLabelText('Email', {timeout: 7000})
    //   .should('exist')
    //   .type('admin')
    //   .getByLabelText('Password', {timeout: 7000})
    //   .should('exist')
    //   .type('admin')
    //   .get('form')
    //   .submit()

    /* Without cypress testing library */
    cy.visit('/login')
      .get('input[name="email"]')
      .type('admin')
      .should('have.value', 'admin')
    cy.get('input[name="password"]')
      .type('admin')
      .should('have.value', 'admin')
    cy.get('form').submit()
  })
})

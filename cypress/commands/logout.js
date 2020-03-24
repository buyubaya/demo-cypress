Cypress.Commands.add('logout', (callback) => {
  cy.visit('https://backstage.inkr.dev/logout')
});
Cypress.Commands.add('login', (callback) => {
  cy.visit('https://backstage.inkr.dev/')

  if (cy.url().should('eq', 'https://backstage.inkr.dev/login')) {
    cy.get('input#username').type('admin@admin.com')
    cy.get('input#password').type('123456')
    cy.get('button[class*="loginButton"]').click();
  }
});
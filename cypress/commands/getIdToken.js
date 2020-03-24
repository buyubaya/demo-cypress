Cypress.Commands.add('getIdToken', (callback) => {
  cy.server()
  cy.route({
    method: 'POST',
    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo*',
    onRequest: (xhr) => {
      const currentIdToken = xhr.request.body.idToken;
      callback(currentIdToken);
    },
  })
    .as('getAccountInfo');
  cy.wait('@getAccountInfo');
});
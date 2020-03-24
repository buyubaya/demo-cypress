import currentUserInfo from "../../libs/UserInfo";
import "../../commands/getIdToken";
import "../../commands/login";
import "../../commands/logout";


describe('My First Test', () => {

  before(() => {
    cy.login();
    cy.getIdToken((idToken) => {
      currentUserInfo.updateIdToken(idToken);
    });
  });

  after(() => {
    cy.logout();
  });

  it('clicking "type" navigates to a new url', () => {
    console.log(22222, currentUserInfo.getIdToken());
  });
});
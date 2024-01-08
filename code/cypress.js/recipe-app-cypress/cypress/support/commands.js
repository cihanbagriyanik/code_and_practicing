// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.url().should("include", "/");
  cy.get('[data-test="loginHeader"]')
    .contains("<Clarusway/>")
    .should("be.visible");
  cy.get('[data-test="loginName"]').should("be.visible").type("asp");
  cy.get('[data-test="loginPassword"]').should("be.visible").type("Clarusway7");
  cy.get('[data-test="loginSbmt"]').should("be.visible").click({ force: true });
  cy.url().should("include", "/home");
});

// token ile giriş
// Cypress.Commands.add("token", () => {
//     cy.setCookie(
//       "user_token",
//       "eyJIjoxNjgzMDQwNTk2LCJpYXQiOjE2ODA0NDg1OTYsImp0aSI6IjNhZTg1ODUzNTM5NjRhMTU4Zl9pZCI6ODJ9.A83lDwnt55ugj_LrwXBNHAa7zAN7JvclBJW-VHhnZMo"
//     );
// });

describe('recipe project', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.viewport(1200, 1200);
  })
    it('login', () => {
      cy.login() 
  
    })
   
  })
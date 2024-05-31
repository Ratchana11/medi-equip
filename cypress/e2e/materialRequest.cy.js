/// <reference types="cypress" />
describe('Assessment', () => {
    
    it('Material Request', () => {
        cy.visit('https://demolens.lmnas.com/login#login');
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        cy.get('#login_email').type(username);
        cy.get('#login_password').type(password);
        cy.get('.for-login > .login-content > .form-signin > .page-card-actions > .btn').click();
        cy.location('pathname', { timeout: 10000 }).should('include', '/app');
        cy.visit('https://demolens.lmnas.com/app/material-request');
        cy.wait(2000);
        cy.get(':nth-child(3) > .list-row > .level-left > .list-subject > .bold > .ellipsis').click();
        cy.wait(300);
        cy.get('.inner-group-button > .btn').click();
        cy.wait(200);
        cy.get('[data-label="Material%20Transfer"]').click();
        cy.wait(500);
        cy.get('.primary-action > .alt-underline').click();
        cy.wait(200);
        cy.get('.primary-action > .alt-underline').click();
        cy.get('.modal-footer > .standard-actions > .btn-primary').click({force: true});
       
        

        
    });
      
});    
      
  
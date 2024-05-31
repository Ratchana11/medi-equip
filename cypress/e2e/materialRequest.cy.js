import * as env from './env2.js';
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
        cy.visit('https://demolens.lmnas.com/app/production-plan');
        cy.get(':nth-child(3) > .list-row > .level-left > .list-subject').click();
        cy.get('.row > :nth-child(1) > :nth-child(3) > .btn').click();
        cy.get('.modal-footer > .standard-actions > .btn-primary').click();
        cy.wait(2000);
        cy.get('[style="overflow: auto; z-index: 2000; display: block;"] > .modal-dialog > .modal-content > .modal-header > .modal-actions > .btn-modal-close').click();
        cy.get(':nth-child(3) > .document-link-badge > .badge-link')
          .click({force: true});

        
    });
      
});    
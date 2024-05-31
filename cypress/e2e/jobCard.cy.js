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
        cy.visit('https://demolens.lmnas.com/app/work-order');
        cy.get(':nth-child(3) > .list-row > .level-left > .list-subject > .level-item.ellipsis > .ellipsis').click();
        cy.get('#work-order-connections_tab-tab').click({ force: true });
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(3) > .open-notification').click();
        cy.wait(1000);
        cy.get(':nth-child(3) > .list-row > .level-left > .list-subject > .bold > .ellipsis').click();
        cy.get('#page-Job\ Card > .page-head > .container > .row > .col > .custom-actions > .btn')
          .click()
          .type()
        
    });
      
});         
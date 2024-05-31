import * as env from './variables/env2.js';
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
        cy.get('[data-label="Create"] > .btn').click();
        cy.get('.inner-group-button.show > .dropdown-menu > .dropdown-item').click();
        cy.get('.msgprint > a').click();
        cy.get('#work-order-work_order_configuration-tab').click({ force: true });
        cy.get('div[data-fieldname="fg_warehouse"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback')
          .click()
        cy.get('div[data-fieldname="fg_warehouse"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback')
          .type(env.targetWarehouse); 
        cy.get('div[data-fieldname="wip_warehouse"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback')
          .click()
        cy.wait(2000);  
        cy.get('div[data-fieldname="wip_warehouse"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback')
          .type("Work In Progress - LCE", { delay: 100 }) // Adding a delay to ensure the dropdown has time to load
           .then(() => {
    
            cy.get('.awesomplete li')
              .contains('Work In Progress - LCE')
              .click();
            });

        cy.wait(4000);  
        cy.get('.primary-action > .alt-underline').click();  
        cy.wait(1000);
        cy.get('.primary-action > .alt-underline').click();
        cy.get('.modal.show > .modal-dialog > .modal-content > .modal-footer > .standard-actions > .btn-primary').click();
        cy.wait(3000);
        cy.get('body').then($body => {
            if ($body.find('.modal.show > .modal-dialog > .modal-content > .modal-header > .modal-actions > .btn-modal-close:visible').length > 0) {
              // Modal is visible, click the close button
              cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .modal-actions > .btn-modal-close').click();
            }
        });
                  cy.wait(4000);
        cy.get('.custom-actions > [data-label="Start"]').click();
        cy.wait(1000);
        cy.get('.modal.show > .modal-dialog > .modal-content > .modal-footer > .standard-actions > .btn-primary').click();
        cy.wait(3000);
        cy.get('[data-name="new-stock-entry-detail-1"] > .data-row > [data-fieldname="qty"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.qty1);
        });
        cy.get('[data-name="new-stock-entry-detail-2"] > .data-row > [data-fieldname="qty"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.qty2);
        });
        cy.get('[data-name="new-stock-entry-detail-3"] > .data-row > [data-fieldname="qty"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.qty1);
        });
        cy.get('[data-name="new-stock-entry-detail-4"] > .data-row > [data-fieldname="qty"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.qty1);
        });
        cy.get('[data-name="new-stock-entry-detail-5"] > .data-row > [data-fieldname="qty"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.qty1);
        });
        cy.get('[data-name="new-stock-entry-detail-6"] > .data-row > [data-fieldname="qty"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.qty1);
        });
        cy.wait(2000);
        // cy.get('#page-Stock\ Entry > .page-head > .container > .row > .col > .standard-actions > .primary-action > .alt-underline')
        //   .click({force: true});
        cy.get('#page-Stock\\ Entry > .page-head > .container > .row > .col > .standard-actions > .primary-action')
          .should('be.visible')
          .click();
        cy.wait(1000);
        cy.get('#page-Stock\\ Entry > .page-head > .container > .row > .col > .standard-actions > .primary-action')
          .should('be.visible')
          .click();
        cy.wait(600);  
        cy.get('.modal.show > .modal-dialog > .modal-content > .modal-footer > .standard-actions > .btn-primary')
          .should('be.visible')
          .click();  
        cy.wait(2000);
        cy.get('div[data-fieldname="work_order"] > .form-group > .control-input-wrapper > .control-value > a').click();
          
      







        
    });
      
});       
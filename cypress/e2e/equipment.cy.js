import * as env from './variables/equipmentenv.js';
/// <reference types="cypress" />
describe('Assessment', () => {
    it('Assessment', () => {
        cy.visit('https://demolens.lmnas.com/login#login');
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        cy.get('#login_email').type(username);
        cy.get('#login_password').type(password);
        cy.get('.for-login > .login-content > .form-signin > .page-card-actions > .btn').click();
        cy.location('pathname', { timeout: 10000 }).should('include', '/app');
        cy.visit('https://demolens.lmnas.com/app/production-plan');
        cy.get('.primary-action').click();

        cy.get(':nth-child(2) > .section-body > :nth-child(2) > form > .frappe-control > .form-group > .control-input-wrapper > .control-input > .input-with-feedback').should('have.value', env.date);
        cy.wait(2000);
        cy.get('.rows > .grid-row > .data-row > [data-fieldname="item_code"]').type(env.item);
        cy.get(':nth-child(4) > .field-area > .form-group > .link-field > .awesomplete > .input-with-feedback').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > .field-area > .form-group > .link-field > .awesomplete > .input-with-feedback').should('have.value', env.bomNo);  
        cy.get('.text-right > .field-area > .form-group > .input-with-feedback').click();
        cy.get('.text-right > .field-area > .form-group > .input-with-feedback').type("230");
        cy.get(':nth-child(2) > form > div[data-fieldtype="Link"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback')
          .type(env.warehouse)  
          .wait(500);  

        cy.get('.awesomplete ul li')  
          .contains(env.warehouse)  
          .click();
         
        cy.wait(2000);
        cy.get('div[data-fieldname="transfer_materials"] > .form-group > .control-input-wrapper > .control-input > .btn').click();
        cy.get('.modal-body > :nth-child(1) > .form-layout > .form-page > .row > .section-body > .form-column > form > div[data-fieldtype="Table MultiSelect"] > .form-group > .control-input-wrapper > .control-input')
          .type(env.transferWarehouse)
  
        cy.get('.awesomplete ul li')  // Adjust the selector if necessary
          .contains(env.transferWarehouse)  // Ensure it contains the warehouse name
          .click();  
        cy.wait(2000);
        cy.get('.modal-body').click();
        cy.get('.modal-footer > .standard-actions > .btn-primary').click();
        cy.wait(3000);
        cy.get('[data-name="new-material-request-plan-item-1"] > .data-row > [data-fieldname="item_code"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.itemCode1);
        });
        cy.get('[data-name="new-material-request-plan-item-2"] > .data-row > [data-fieldname="item_code"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.itemCode2);
        });
        cy.get('[data-name="new-material-request-plan-item-3"] > .data-row > [data-fieldname="item_code"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.itemCode3);
        });
        cy.get('[data-name="new-material-request-plan-item-4"] > .data-row > [data-fieldname="item_code"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.itemCode4);
        });
        cy.get('[data-name="new-material-request-plan-item-5"] > .data-row > [data-fieldname="item_code"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.itemCode5);
        });
        cy.get('[data-name="new-material-request-plan-item-6"] > .data-row > [data-fieldname="item_code"]')
          .should('exist')
          .should('be.visible')
          .invoke('text')
          .then(text => {
           console.log('Actual text:', text);
           expect(text.trim()).to.eq(env.itemCode6);
        });
        cy.get('[data-name="new-material-request-plan-item-1"] > .data-row > [data-fieldname="warehouse"]').should('have.value', env.forWarehouse);

    });
});    
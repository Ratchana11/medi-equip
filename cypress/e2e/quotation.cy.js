
import * as env from './variables/envQuotationEU000010500028.js';
/// <reference types="cypress" />
describe('Quotation Flow for EU000010500028', () => {
	it('Quotation', () => {
      // Sequence 1
      // Login and navigate to new quotation
      const username = Cypress.env('username');
      const password = Cypress.env('password');
      cy.visit(env.source);
      cy.get('#login_email').type(username);
      cy.get('#login_password').type(password);
      cy.get('.form-signin > :nth-child(1) > .page-card-actions > .btn').click();
      cy.location('pathname', { timeout: 10000 }).should('include', '/app');
      cy.visit(env.target);
      cy.get('.primary-action').click();
      
      // Sequence 2
      // Default input at creation of quotation
      cy.get('.tab-content', { timeout: 10000 }).should('be.visible');
      cy.get('div[data-fieldname="transaction_date"] > .form-group > .control-input-wrapper > .control-input > .input-with-feedback').should('have.value', env.date);
      cy.get('#quotation-__details > :nth-child(2) > .section-body > :nth-child(3) > form > div[data-fieldtype="Select"] > .form-group > .control-input-wrapper > .control-input > .input-with-feedback').should('have.value', env.orderType);
      cy.get('div[data-fieldname="valid_till"] > .form-group > .control-input-wrapper > .control-input > .input-with-feedback').should('have.value', env.validTill)
      cy.get('#quotation-__details > :nth-child(2) > .section-body > :nth-child(1) > form > div[data-fieldtype="Link"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback').should('have.value', env.quotationTo)
      
      // Sequence 2.1
      // Mandatory fields in details tab
      cy.get('.tab-content', { timeout: 20000 }).should('be.visible');
      
      cy.get(':nth-child(2) > .section-body > :nth-child(3) > form > div[data-fieldtype="Data"] > .form-group > .control-input-wrapper > .control-input > .input-with-feedback', { scrollBehavior: 'center' })
        .should('be.visible')     
        .wait(500)                 
        .focus()                   
        .type(env.projectName, { force: true }) 
        .type('{enter}');     

      cy.get('div[data-fieldname="request_date"] > .form-group > .control-input-wrapper > .control-input > .input-with-feedback', { timeout: 10000 }).should('be.visible');
      cy.get('div[data-fieldname="request_date"] > .form-group > .control-input-wrapper > .control-input > .input-with-feedback', { scrollBehavior: 'center' })
        .should('be.visible') 
        .wait(1000)
        .focus()
        .type(env.requestDate, { force: true })
        .type('{enter}'); 
        
      // Sequence 3
      // Validate the customer informations
      cy.get('.tab-content', { timeout: 10000 }).should('be.visible');
      cy.get('div[data-fieldtype="Dynamic Link"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { scrollBehavior: 'center' })
        .type(env.customerName)
        .type('{enter}');
      cy.get('#quotation-__details > :nth-child(3) > .section-body > :nth-child(1) > form > div[data-fieldtype="Link"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('be.visible');
      cy.get('#quotation-__details > :nth-child(3) > .section-body > :nth-child(1) > form > div[data-fieldtype="Link"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('have.value', env.currency);
      cy.get('div[data-fieldname="selling_price_list"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('have.value', env.priceList);
      cy.get('#quotation-address_and_contact_tab-tab', { timeout: 10000 }).should('be.visible');
      cy.get('#quotation-address_and_contact_tab-tab').click();
      cy.get('#quotation-address_and_contact_tab > :nth-child(2) > .section-body > :nth-child(1) > form > .input-max-width > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('be.visible');
      cy.get('#quotation-address_and_contact_tab > :nth-child(2) > .section-body > :nth-child(1) > form > .input-max-width > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('have.value', env.customerAddress);
      cy.get(':nth-child(1) > form > [data-fieldtype="Small Text"] > .form-group > .control-input-wrapper > .control-value')
        .invoke('text')
        .then(text => {
          expect(text.trim()).to.match(new RegExp(env.address.replace(/\s+/g, '\\s*')));
        });
      cy.get(':nth-child(2) > .section-body > :nth-child(2) > form > div[data-fieldtype="Link"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('have.value', env.contactPerson);
      cy.get('#quotation-address_and_contact_tab > :nth-child(3) > .section-body > :nth-child(1) > form > div[data-fieldtype="Link"] > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('have.value', env.shippingAddress);
      cy.get('#quotation-terms_tab-tab', { timeout: 10000 }).should('be.visible');
      cy.get('#quotation-terms_tab-tab').click();
      cy.get('#quotation-terms_tab > :nth-child(2) > .section-body > :nth-child(1) > form > div[data-fieldtype="Select"] > .form-group > .control-input-wrapper > .control-input > .input-with-feedback', { timeout: 10000 }).should('be.visible');
      cy.get('#quotation-terms_tab > :nth-child(2) > .section-body > :nth-child(1) > form > div[data-fieldtype="Select"] > .form-group > .control-input-wrapper > .control-input > .input-with-feedback', { timeout: 10000 }).should('have.value', env.incoterms);
      cy.get('#quotation-terms_tab > :nth-child(3) > .section-body > :nth-child(1) > form > .frappe-control > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('have.value', env.paymentTerms);
      cy.get('#quotation-terms_tab > :nth-child(4) > .section-body > .form-column > form > .input-max-width > .form-group > .control-input-wrapper > .control-input > .link-field > .awesomplete > .input-with-feedback', { timeout: 10000 }).should('have.value', env.terms);

      // Sequence 4
      // Validate the Item Details
      cy.get('#quotation-__details-tab', { timeout: 10000 }).should('be.visible');
      cy.get('#quotation-__details-tab').click();
      cy.get('.rows > .grid-row > .data-row > .col-xs-4', { scrollBehavior: 'center' })
        .type(env.itemCode)
        .wait(1000)
      cy.get('#awesomplete_list_33 > :nth-child(4)').click({ force: true });
      cy.wait(2000);
      cy.get('#page-query-report > .page-head > .container > .row > .col-md-4 > .fill-width > :nth-child(1) > .flex > .ellipsis').should('be.visible');
      cy.wait(30000);
      cy.get('.dt-cell--col-2 > .dt-cell__content > .dt-filter').should('be.visible')
        .click()
        .type(env.itemCode);
      cy.wait(2000);
      cy.get('.dt-scrollable > .dt-row').should('be.visible');
      cy.get('.dt-cell__content > .btn').should('be.visible')
        .click({ force: true });
      cy.wait(20000);
      cy.get('#quotation-__details-tab', { timeout: 10000 }).should('be.visible');
      cy.get(':nth-child(4) > .section-body > .form-column > form > .frappe-control.form-group > .grid-field > .form-grid-container > .form-grid').scrollIntoView()
      cy.get('.rows > .grid-row > .data-row > .col-xs-4')
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.eq(env.itemCode);
        });
      cy.get('.col-xs-1.bold').should('have.text', env.quantity);
      cy.get('.col-xs-2.bold').should('have.text', env.rate);
      cy.get('.rows > .grid-row > .data-row > [data-fieldname="amount"]').should('have.text', env.amount);
      cy.get('[data-fieldname="total_qty"] > .form-group > .control-input-wrapper > .control-value', { timeout: 10000 })
        .should('be.visible')
        .then($element => {
          if ($element.val() !== '') {
            expect($element.val()).to.equal(env.totalQuantity);
          }
        });
      cy.get('[data-fieldname="total"] > .form-group > .control-input-wrapper > .control-value', { timeout: 10000 })
        .should('be.visible')
        .then($element => {
          if ($element.val() !== '') {
            expect($element.val()).to.equal(env.totalCost);
          }
        });
      cy.get('[data-fieldname="grand_total"] > .form-group > .control-input-wrapper > .control-value', { timeout: 10000 })
        .should('be.visible')
        .then($element => {
          if ($element.val() !== '') {
            expect($element.val()).to.equal(env.grandTotal);
          }
        });
      cy.get('[data-fieldname="rounded_total"] > .form-group > .control-input-wrapper > .control-value', { timeout: 10000 })
        .should('be.visible')
        .then($element => {
          if ($element.val() !== '') {
            expect($element.val()).to.equal(env.roundedTotal);
          }
        });
        
      // Sequence 4.1
      // Item rate should be red if it is more than 3 month for qsgbcz
      cy.get('.col-xs-2.bold', { timeout: 10000 }).should('have.css', 'color', 'rgb(255, 0, 0)');

      // Sequence 5
      // Tax and Charges
      cy.get(':nth-child(7) > .section-body > .form-column > form > .frappe-control > .grid-field > .control-label', { timeout: 10000 }).should('be.visible');
      cy.get(':nth-child(7) > .section-body > .form-column > form > .frappe-control > .grid-field > .form-clickable-section > .flex > .grid-buttons > .grid-add-row', { timeout: 10000 }).click();
      cy.get('.rows > .grid-row > .data-row > [data-fieldname="charge_type"]').click();
      cy.get('.rows > .grid-row > .data-row > [data-fieldname="charge_type"]').should('be.visible')
        .find('select') 
        .should('be.visible')
        .select(env.taxType) 
        .should('have.value', env.taxType); 
      cy.get('.field-area > .form-group > .link-field > .awesomplete > .input-with-feedback').click();
      cy.get('#awesomplete_list_37').should('be.visible');
      cy.get('#awesomplete_list_37 li').contains(env.taxAccounthead).click();
      cy.wait(2000); 
      cy.get(':nth-child(7) > .section-body > .form-column > form > .frappe-control > .grid-field > .form-grid-container > .form-grid > .grid-body > .rows > .grid-row > .data-row > [data-fieldname="rate"]', { timeout: 10000 })
        .invoke('text')
        .then(text => {
          expect(text.trim()).to.equal(env.taxRate);
        });
      cy.get('.rows > .grid-row > .data-row > [data-fieldname="tax_amount"]', { timeout: 10000 })
        .invoke('text')
        .then(text => {
          expect(text.trim()).to.equal(env.taxAmount);
        });
      cy.get(':nth-child(7) > .section-body > .form-column > form > [data-fieldtype="Table"] > .grid-field > .form-grid-container > .form-grid > .grid-body > .rows > .grid-row > .data-row > :nth-child(7) > .field-area > .form-group > .input-with-feedback', { timeout: 10000 })
      .should('be.visible')
      .then($element => {
        if ($element.val() !== '') {
          expect($element.val()).to.equal(env.taxTotal);
        }
      });
      cy.get(':nth-child(8) > .section-body > :nth-child(2) > form > .frappe-control > .form-group > .control-input-wrapper > .control-value', { timeout: 10000 })
        .should('be.visible')
        .then($element => {
          if ($element.val() !== '') {
            expect($element.val()).to.equal(env.totalTaxandCharge);
          }
        });
      cy.get('[data-fieldname="grand_total"] > .form-group > .control-input-wrapper > .control-value', { timeout: 10000 })
        .should('be.visible')
        .then($element => {
          if ($element.val() !== '') {
            expect($element.val()).to.equal(env.grandTotalwithTax);
          }
        });
      cy.get('[data-fieldname="rounded_total"] > .form-group > .control-input-wrapper > .control-value', { timeout: 10000 })
        .should('be.visible')
        .then($element => {
          if ($element.val() !== '') {
            expect($element.val()).to.equal(env.roundedTotalwithTax);
          }
        });
	});
})
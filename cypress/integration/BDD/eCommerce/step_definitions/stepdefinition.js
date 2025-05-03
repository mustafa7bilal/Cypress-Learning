import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the ecommerce site', () => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice')
  cy.wait(5000);
});

When('I fill the user details and submit the form', () => {
  cy.get(':nth-child(1) > .form-control').type('Mustafa Bilal');
  cy.get(':nth-child(2) > .form-control').type('mustafa7bilal@gmail.com');
  cy.get('#exampleInputPassword1').type('Mufa119544@');
  cy.get('#exampleCheck1').check();
  cy.get('#exampleFormControlSelect1').select('Male');
  cy.get('#inlineRadio1').check();
  cy.get(':nth-child(8) > .form-control').type('1999-01-10');
  cy.get('.btn').click();
});

When('I add two products to cart', () => {
  cy.get(':nth-child(2) > .nav-link').click();
  cy.xpath('//body//app-root//app-card[2]').contains('Samsung Note 8');
  cy.get('.card-footer .btn.btn-info').eq(1).click();
  cy.xpath('//body//app-root//app-card[4]').contains('Blackberry');
  cy.get('.card-footer .btn.btn-info').eq(3).click();
});

When('I checkout and confirm the purchase', () => {
  cy.get('.nav-link.btn.btn-primary').click();
  cy.get(':nth-child(4) > :nth-child(5) > .btn').click();
  cy.get('#country').type('Pak');
  cy.wait(5000);
  cy.get('.suggestions > ul > li > a').click();
  cy.get('#checkbox2').check({ force: true });
  cy.get('.ng-untouched > .btn').click();
});

Then('The order should be placed successfully', () => {
  cy.get('.alert').should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks');
});

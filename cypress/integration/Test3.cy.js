/// <reference types="cypress" />
describe('Visible and invisible elements',function(){

    it('visible and invisible',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');


    })
})
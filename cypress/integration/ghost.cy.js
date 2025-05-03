/// <reference types="cypress" />
describe('Midnight',function(){
    it('Midnight', function(){
        cy.visit('https://midnight.host/');
        cy.get('#enterBtn').contains('Enter').should('be.visible').click();
        cy.get('a').click();
        cy.get('.cursor-pointer', { timeout: 10000 }).should('be.visible').contains('Login').click();
        cy.get('.LoginModal_inputWrapper__3mTwy > input').type('mustafa7bilal@gmail.com');
        cy.get('.LoginModal_metamaskWraper__BbPGA').click();
        cy.get('.LoginModal_submit_btn__YSDvc > img').should('be.visible').click();
        

   
    })
})
/// <reference types="cypress" />
describe('Green Kart',function() {

    it('visit website URL',function(){
       
        cy.visit( Cypress.env('url')+'seleniumPractise/#/');
        cy.get('body').should('be.visible');
        cy.get('.blinkingText').should('be.visible');
        cy.get('.search-keyword').should('be.visible').type('ca');
        // cy.get('.search-button').click();
       cy.wait(5000);
        // cy.get('.products .products').should('have.length',4);
        cy.get('.products:visible').find('.product').should('have.length', 4);
        cy.get('.products:visible').find('.product').eq(1).should('be.visible');
        cy.get(':nth-child(2) > .stepper-input > .increment').click();
        cy.get(':nth-child(2) > .product-action > button').click();
        cy.get('.products:visible').find('.product').each(function($el, index, $list){
            const textveg=$el.find('.product-name').text();
            if(textveg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
                cy.wait(5000)
                cy.get('.brand').should('have.text', 'GREENKART').then(($el) => {
                    const logoText = $el.text();
                    cy.log('The logo text is: ' + logoText);
                    // console.log('The logo text is:', logoText);
                    cy.get('.cart-icon > img').click();
                    cy.contains('PROCEED TO CHECKOUT').click();
                    cy.contains('Place Order').should('be.visible');
                    cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();
                    



                });
                
            }
        });


        });

});



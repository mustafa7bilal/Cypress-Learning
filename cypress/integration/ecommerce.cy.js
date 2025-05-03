require('cypress-xpath');
describe('Ecommerce website', function () {
    it('Place order', function () {
        // cy.visitsite();
        
        cy.visit(Cypress.env('url')+"/angularpractice");
        // cy.url('angular');
        cy.get(':nth-child(1) > .form-control').type('Mustafa Bilal');
        cy.get(':nth-child(2) > .form-control').type('mustafa7bilal@gmail.com');
        
        cy.get('#exampleInputPassword1').type('Mufa119544@');
       
        cy.get('#exampleCheck1').check().should('be.checked');
        cy.get('#exampleFormControlSelect1').select('Male').should('have.value', 'Male');
        cy.get('#inlineRadio1').check().should('be.checked');
        cy.get(':nth-child(8) > .form-control').click().type('1999-01-10').should('have.value', '1999-01-10');
        cy.get('.btn').click();
        cy.get('.alert').should('include.text', 'Success! The Form has been submitted successfully!');
        cy.get('.close').click();
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Shop').click();
        cy.contains('Shop Name').should('be.visible');
        cy.get('app-card').should('have.length', 4);
        // cy.get('.col-lg-3 col-md-6 mb-3').eq(1).should('have.text','Samsung Note 8');
        cy.xpath('//body//app-root//app-card[2]').should('exist').contains('Samsung Note 8');
        cy.get('.card-footer .btn.btn-info').eq(1).should('be.visible', 'have.text', 'Add').click();
        cy.xpath('//body//app-root//app-card[4]').should('exist').contains('Blackberry');
        cy.get('.card-footer .btn.btn-info').eq(3).should('be.visible', 'have.text', 'Add').click();
        cy.get('.nav-link.btn.btn-primary ').should('be.visible').contains('Checkout').click();
        cy.get('.navbar > .container').should('be.visible', 'have.text', 'ProtoCommerce Home');
        let sum=0;
        cy.get('tr td:nth-child(4) strong').each($el=>{
            const amount=Number($el.text().split(" ")[1].trim());  
            sum=sum+amount
        }).then(function(){
expect(sum).to.be.lessThan(200000);
        })
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click();
        cy.get('#country').type('Pak');
        cy.wait(5000)
        cy.get('.suggestions > ul > li > a').should('have.text','Pakistan','be.visible').click();

        cy.get('#checkbox2').check({ force: true }).should('be.checked');
        cy.get('.ng-untouched > .btn').click();
        cy.get('.alert').should('be.visible','have.text','Success! Thank you! Your order will be delivered in next few weeks :-).');
        cy.get('.close').click();







    })
})
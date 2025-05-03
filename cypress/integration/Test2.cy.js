describe('Practice',function(){
    it('Check Boxes',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.url().then((url)=>{
            cy.log('The current Url' +url);
            expect(url).to.include('rahulshettyacademy.com');
        });
    // check boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option1','option2']);
        
        // Static Drop Downs
cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');

// dynamic drop downs
cy.get('#autocomplete').type('ind');
cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
    if($e1.text()==='India')

{
    cy.wrap($e1).click();
}
    })
    cy.get('#autocomplete').should('have.value','India')

    });
  
  });
  
    

    

    
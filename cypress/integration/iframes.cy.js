/// <reference types="cypress" />

/// <reference types="cypress-iframe"/>

import('cypress-iframe')
describe('iframe',function(){
    it('iframe',function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.frameLoaded('#courses-iframe');
cy.iframe().find("a[href*='https://rahulshettyacademy.com/blog']").eq('1').click({force:true});
cy.iframe()
  .find("a[href*='https://rahulshettyacademy.com/blog']")
  .eq(1)
  .click({ force: true });
;




    })
})


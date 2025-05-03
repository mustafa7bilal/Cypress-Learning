describe(' calendars ',function(){
    it(' calendars ',function(){
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
cy.get('.react-date-picker__inputGroup').click();
cy.get('.react-calendar').should('be.visible');
cy.get('.react-calendar__navigation__label').should('be.visible').click();

for (let i = 0; i < 26; i++) {
    cy.get('.react-calendar__navigation__prev-button').should('be.visible').click();
   
  }

// Cypress._.times(26, () => {
//     cy.get('.react-calendar__navigation__prev-button').click();
//   });
  cy.get(':nth-child(1) > abbr').contains('January').should('be.visible').click();
  cy.get('.react-calendar__month-view__days > :nth-child(14)').contains('10').should('be.visible').click();
  cy.get('.react-date-picker__inputGroup input')
  .invoke('val')
  .should('eq', '1999-01-10')
  
    })
})




// // describe('Calendar test',()=>
// //   {
   
// //       it('Verify date selection',()=>{
   
// //           const monthNumber = "01";
// //           const date = "10";
// //           const year = "1999";
// //           const expectedList = [monthNumber,date,year];
   
// //           cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
// //           cy.wait(5000)
// //           cy.get(".react-date-picker__inputGroup").click();
   
// //           cy.get(".react-calendar__navigation__label").click();
// //           cy.get(".react-calendar__navigation__label").click();
// //           cy.contains("button",year).click();
// //           cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
// //           cy.contains("abbr",date).click();
   
// //           //Assertion
// //           cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
// //           {
// //               cy.wrap($el).invoke('val').should('eq',expectedList[index]);
// //           }
          
          
          
          
// //           )     
   
   
   
   
   
   
   
   
   
   
   
   
   
   
// //       })
   
   
   
   
   
   
   

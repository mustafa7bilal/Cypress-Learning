// import 'cypress-real-events/support';
describe('mouse hover',function(){
    it('mouse hover practice', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('div.mouse-hover-content').invoke('show');
        // cy.get('.mouse-hover-content').prev().realHover();
        cy.contains('Top').click({force:true});
    })
})
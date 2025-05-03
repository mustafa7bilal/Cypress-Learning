describe('practice dynamic dropdown',function(){
    it('dynamic dropdown',function(){
cy.visit('https://codenboxautomationlab.com/practice/');

cy.get('#autocomplete').type('Pak');
cy.get('.ui-menu-item').each(($el,index,$list)=>{
    if($el.text()==="Pakistan")
    {
        cy.wrap($el).click()
    }

}

)
    
})

    })

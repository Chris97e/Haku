describe('Login con credenciales correcta, que bueno', ()=>{

    it("Seleccionar el tipo de usuario", ()=>{
        cy.visit("http://facebook.com");
        cy.contains('email').type("cris._97@hotmail.com");
        cy.get('[class="password"]').type("hola");
        cy.contains('submit').click();
                
        
    });

});
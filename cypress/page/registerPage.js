class RegisterPage {
    elements = {
        buttonRegister:() => cy.get('span.ui-button-text.ui-c:contains("Registrarse")'),
        nameAllIn:()=>  cy.get('[name="registro:nombre"]'),
        usernameR:() => cy.get('[id="registro:nombreUsuario"]'),
        password: () => cy.get('[id="registro:clave"]'),
        confirmPassword:()=> cy.get('[id="registro:verificacionClave"]'),
        buttonAceptar:() => cy.get('span.ui-button-text.ui-c:contains("Aceptar")'),
        confirmMsg:()=> cy.get('div.ui-growl-message span.ui-growl-title').should('have.text', 'Operación completada'),
        confirmDuplicate:()=>  cy.get('div.ui-growl-message span.ui-growl-title').should('have.text', 'Existing registration')

    }
    typeRegisterButton(){
        this.elements.buttonRegister().click()
    }
    typeAllName(nameAll){
        this.elements.nameAllIn().type(nameAll)
    }
    typeUsername(userName){
        this.elements.usernameR().type(userName)
    }
    typePassword(password){
        this.elements.password().type(password)
    }
    typeConfirmPassword(password){
        this.elements.confirmPassword().type(password)
    }
    typeButtonAceptar(){
        this.elements.buttonAceptar().click()
    }

}
module.exports= new  RegisterPage()
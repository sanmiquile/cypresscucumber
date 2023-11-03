class LoginPage {
    elements = {

        usernameInput: () => cy.get('[name="nombreUsuario"]'),
        passwordInput: () => cy.get('#clave'),
        buttonIngresar: () => cy.get('#j_idt74')
    }

    typeUsername(userName){
        this.elements.usernameInput().type(userName)
    }
    typeClave(password){

        this.elements.passwordInput().type(password)
    }
    typeButton(){
        this.elements.buttonIngresar().click()
    }

}

module.exports = new LoginPage();
class HomePage{

    elements = {
        buttonSalir: () =>  cy.get('span.ui-button-text.ui-c:contains("Salir")').should('exist')
    }


}
module.exports= new HomePage();
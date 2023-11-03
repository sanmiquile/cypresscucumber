import RegisterPage from "../../page/registerPage";
import {faker} from "@faker-js/faker/locale/en";
const {When, Given, Then} = require("@badeball/cypress-cucumber-preprocessor");

beforeEach( () => {
    cy.visit('/')
});



Given('Deseo registrame en SMS Builder',  function () {

    RegisterPage.typeRegisterButton()
    cy.screenshot()

    //DataManager.registerDto = new RegisterDto(nameAll, username, password, password);
});

When('ingreso mis datos de afiliacion y me registro',  function () {
    const nameAll = faker.person.fullName();
    const userName= faker.internet.userName()
    const password = faker.internet.password();

    RegisterPage.typeAllName(nameAll)
    RegisterPage.typeUsername(userName)
    RegisterPage.typePassword(password)
    RegisterPage.typeConfirmPassword(password)
    RegisterPage.typeButtonAceptar()
    cy.screenshot()

});

Then('muestra mensaje',  function (string) {
   /* DataManager.registerPage = new RegisterPage();
    const messageElement = registerPage.RegisterMessage()
    console.log("OJOimprimer messageElemente",  messageElement);
    assert.equal(messageElement,string);*/
    RegisterPage.elements.confirmMsg()
    cy.screenshot()


});

When ('ingreso mis datos existentes de afiliacion y me registro',  function () {
    //DataManager.registerDto = new RegisterDto(nameAll, username, password, password);
    const nameAll = "Sandra Milena Quintero Leal";
    const userName= "sami"
    const password = "1234"

    RegisterPage.typeAllName(nameAll)
    RegisterPage.typeUsername(userName)
    RegisterPage.typePassword(password)
    RegisterPage.typeConfirmPassword(password)
    RegisterPage.typeButtonAceptar()
    cy.screenshot()

});

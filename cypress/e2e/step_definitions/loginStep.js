import loginPage from "../../page/loginPage";
import homePage from "../../page/homePage";
const {When, Given, Then} = require("@badeball/cypress-cucumber-preprocessor");

beforeEach( () => {
    cy.visit('/')
});

Given('soy un usuario que ya esta registrado',  function () {
    loginPage.typeUsername('sami')
    loginPage.typeClave('1234')
    cy.screenshot()
});

When('accedo con mis credenciales de logueo',  function () {
    loginPage.typeButton()
    cy.screenshot()
});

Then('debo estar en el Home',  function () {
    homePage.elements.buttonSalir()
    cy.screenshot()
});
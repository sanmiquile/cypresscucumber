// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Commands.add("takeScreenshotAfterTest", () => {
    Cypress.on("test:after:run", (test, runnable) => {
        const screenshotsFolder = Cypress.config("screenshotsFolder");
        const testName = Cypress.mocha.getRunner().suite.title;
        const screenshotFileName = `${testName} -- ${runnable.title}.png`;

        cy.screenshot(screenshotFileName, { capture: "runner" }).then(() => {
            cy.readFile(
                `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
                "base64"
            ).then((imgData) => {
                const stepResult = window.testState.runTests[window.testState.currentScenario.name][window.testState.currentStep];

                if (stepResult) {
                    stepResult.attachment = {
                        data: imgData,
                        media: { type: "image/png" },
                        index: window.testState.currentStep,
                        testCase: window.testState.formatTestCase(
                            window.testState.currentScenario
                        ),
                    };
                }
            });
        });
    });
});

beforeEach(() => {
    cy.takeScreenshotAfterTest();
});

/*
Cypress.Commands.add("takeScreenshotAfterTest", () => {
    Cypress.on("test:after:run", (test, runnable) => {
        const screenshotsFolder = Cypress.config("screenshotsFolder");
        const testName = Cypress.mocha.getRunner().suite.title;
        const screenshotFileName = `${testName} -- ${runnable.title}.png`;

        cy.screenshot(screenshotFileName, { capture: "runner" }).then(() => {
            cy.readFile(`${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`, "base64").then((imgData) => {
                const stepResult = window.testState.runTests[window.testState.currentScenario.name][window.testState.currentStep];
                if (stepResult) {
                    stepResult.attachment = {
                        data: imgData,
                        media: { type: "image/png" },
                        index: window.testState.currentStep,
                        testCase: window.testState.formatTestCase(window.testState.currentScenario),
                    };
                }
            });
        });
    });
});

beforeEach(() => {
    cy.takeScreenshotAfterTest();
});*/

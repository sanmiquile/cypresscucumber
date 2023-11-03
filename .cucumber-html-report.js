const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "jsonlogs",
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "xx",
        },
        device: "Local test machine",
        platform: {
            name: "MacOs",
            version: "10",
        },
    },
});
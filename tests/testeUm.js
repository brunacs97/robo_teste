module.exports = {
    'Demo test ecosia.org': function (browser) {
        browser
            .url('https://arkmeds-teste-1384523.dev.odoo.com/web#cids=1&home=')
            .waitForElementVisible('body')
            .setValue("#login", "bruna.cristina@arkmeds.com",)
            .setValue("#password", "123",)
            .click('button[type=submit]')
            .waitForElementVisible('body')
            .pause(10000)


            .assert.titleContains('Ecosia')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.containsText('.mainline-results', 'Nightwatch.js')
            .end();
    }
};
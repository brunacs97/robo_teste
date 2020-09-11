module.exports = class BaseConnector {

    constructor()
    {

    }

    init(browser)
    {
        this.browser = browser;
    }

    login()
    {
        this.browser
            .url('https://desenvolvimento.arkmeds.com/usuarios/conectar?next=/')
            .waitForElementVisible('body')
            .setValue("#inputEmail", "a@a.com",)
            .setValue("#inputPassword", "a",)
            .click('button[type=submit]');
    }

    removeChat()
    {
        return new Promise(async(resolve, reject) => {
            this.browser
                .waitForElementPresent('#crisp-chatbox', 10 * 1000)
                .execute(function () {
                    document.querySelector('#crisp-chatbox').innerHTML = '';
                }, () => {
                    resolve(true);
                })
        });
    }

    async fillInputs(data)
    {
        return new Promise(async(resolve, reject) => {
            for(let item in data) {
                await this.asyncSetValue(data[item].path, data[item].value);

            }
            resolve(true);
        });
    }

    asyncSetValue(selector, value)
    {
        return new Promise((resolve, reject) => {
            this.browser.setValue(selector, value, () => resolve(true));
        }) 
    }
}
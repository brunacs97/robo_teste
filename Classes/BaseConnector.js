module.exports = class BaseConnector {
    removeChat() {
        return new Promise(async (resolve, reject) => {
            this.browser
                .waitForElementPresent('#crisp-chatbox', 30000)
                .execute(function () {
                    document.querySelector('#crisp-chatbox').innerHTML = '';
                }, () => {
                    resolve(true);
                })
        });
    }
}

const BaseConnector = require('./BaseConnector');

module.exports = class Empresa extends BaseConnector {

    constructor() {
        super();
        this.receipt = {
            "nome": "#formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input",
            "nomeFantasia": "#formulario_empresa > div > form > div.card-body > div > div:nth-child(2) > input",
            "cnpj": "#formulario_empresa > div > form > div.card-body > div > div:nth-child(5) > input",
            "cep": "#id_cep",
            "rua": "#home > div > div:nth-child(2) > input",
            "numero": "#home > div > div:nth-child(3) > input",
            "complemento": "#home > div > div:nth-child(4) > input",
            "bairro": "#home > div > div:nth-child(5) > input",
            "cidade": "#home > div > div:nth-child(6) > input"
        }
    }

    async create(formData) {
        this.browser
        //clicando em cadastro e consulta
            .waitForElementVisible('body')
            .url('https://desenvolvimento.arkmeds.com/cadastros/empresa/novo/')
            //esperando carregar o chat
            .waitForElementVisible('body');

        await this.removeChat();

        let inputsData = [];

        Object.keys(formData.params).forEach(item => {
            inputsData.push({
                path: this.receipt[item],
                value: formData.params[item]
            })
        })

        await this.fillInputs(inputsData);


        this.browser

        //selecionando um tipo de empresa
            .click('#formulario_empresa > div > form > div.card-body > div > div:nth-child(3) > span > span.selection > span')
            .click('#select2-tipo-results > li:nth-child(2)')

            //selecionando um superior
            .click('#formulario_empresa > div > form > div.card-body > div > div:nth-child(4) > span > span.selection > span')
            .click('body > span > span > span.select2-search.select2-search--dropdown > input')
            .setValue("body > span > span > span.select2-search.select2-search--dropdown > input", "AAA",)
            .click('#select2-superior-results > li.select2-results__option.select2-results__option--highlighted')

            //salvando estado
            .click('#home > div > div:nth-child(7) > span > span.selection > span')
            .click('#select2-estado-results > li:nth-child(3)')

            //selecionando aba contato
            .click('#profile-tab')
            .waitForElementVisible('#profile > div > div:nth-child(1) > input')


            //preenchendo dados da aba contato
            .setValue(" #profile > div > div:nth-child(1) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
            .setValue(" #profile > div > div:nth-child(3) > input", "89",)
            .setValue(" #profile > div > div:nth-child(5) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
            .setValue(" #profile > div > div:nth-child(2) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
            .setValue(" #profile > div > div:nth-child(4) > input", "123",)

            //selecionando aba observação
            .click('#contact-tab')
            .waitForElementVisible('  #contact > div:nth-child(1) > div > textarea')
            .setValue("#contact > div:nth-child(1) > div > textarea", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)

            //clicando em adicionar anexo
            .setValue('input[type="file"]', require('path').resolve('/home/didimo/Downloads/Imagens/1.png'))

            //Clicando na aba PMOC
            .click('#pmoc-tab')
            //esperando input aparecer e setando valores
            .waitForElementVisible('  #pmoc > div > div:nth-child(1) > input')
            .setValue("#pmoc > div > div:nth-child(1) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
            .setValue("#pmoc > div > div:nth-child(2) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
            .setValue("#pmoc > div > div:nth-child(3) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)

            //salvando empresa
            .click('#formulario_empresa > div > form > div.p-0.border-0.card-footer > div.button-container > button')


            .pause(20000)


        if (formData.nome) {
            this.browser
                .waitForElementPresent('#formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input', 10 * 1000)
                .assert.containsText("#formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input", "")


        }

    }


}
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
            .waitForElementVisible('body', 30000)
            .url('https://desenvolvimento.arkmeds.com/cadastros/empresa/novo/')
            //esperando carregar o chat
            .waitForElementVisible('body', 30000);

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
            .waitForElementVisible('#profile > div > div:nth-child(1) > input', 30000)


            //preenchendo dados da aba contato
            .setValue(" #profile > div > div:nth-child(1) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
            .setValue(" #profile > div > div:nth-child(3) > input", "89",)
            .setValue(" #profile > div > div:nth-child(5) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
            .setValue(" #profile > div > div:nth-child(2) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
            .setValue(" #profile > div > div:nth-child(4) > input", "123",)

            //selecionando aba observação
            .click('#contact-tab')
            .waitForElementVisible('  #contact > div:nth-child(1) > div > textarea', 30000)
            .setValue("#contact > div:nth-child(1) > div > textarea", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)

            //clicando em adicionar anexo
            .setValue('input[type="file"]', require('path').resolve('/home/didimo/Downloads/Imagens/1.png'))

            //Clicando na aba PMOC
            .click('#pmoc-tab')
            //esperando input aparecer e setando valores
            .waitForElementVisible('  #pmoc > div > div:nth-child(1) > input', 30000)
            .setValue("#pmoc > div > div:nth-child(1) > input", "70",)
            .setValue("#pmoc > div > div:nth-child(2) > input", "80",)
            .setValue("#pmoc > div > div:nth-child(3) > input", "90",)

            //salvando empresa
            .click('#formulario_empresa > div > form > div.p-0.border-0.card-footer > div.button-container > button')
            .waitForElementPresent('body > div.swal-overlay.swal-overlay--show-modal', 30000)
            .waitForElementPresent('body > div.swal-overlay.swal-overlay--show-modal > div', 30000)
            .waitForElementPresent(' body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-text', 30000)

        //comparando se a empresa foi salva com sucesso para testar a edição
        if (this.browser.assert.containsText("body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-title", "Sucesso!")) {

            this.browser
                .click('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div > button')
                .waitForElementPresent('#main-content-wrapper > div > div.main-content > div:nth-child(10) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2) > a', 30000)
                .click('#main-content-wrapper > div > div.main-content > div:nth-child(10) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2) > a')
            //removendo o chat para adicionar modificacoes
            await this.removeChat();
            this.browser
                .waitForElementPresent('#formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input\n', 100000)
                //editando nome
                .setValue(" #formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input", "edicao'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
                //editando nome fantasia
                .setValue("#formulario_empresa > div > form > div.card-body > div > div:nth-child(2) > input", "edicao'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
                //editando um tipo de empresa
                .waitForElementPresent('#formulario_empresa > div > form > div.card-body > div > div:nth-child(3) > span', 10000)
                .click('#formulario_empresa > div > form > div.card-body > div > div:nth-child(3) > span')
                .click('#select2-tipo-results > li:nth-child(5)')
                //editando um superior
                .waitForElementPresent('#formulario_empresa > div > form > div.card-body > div > div:nth-child(4) > span > span.selection > span', 10000)
                .click('#formulario_empresa > div > form > div.card-body > div > div:nth-child(4) > span > span.selection > span')
                .click('body > span > span > span.select2-search.select2-search--dropdown > input')
                .setValue("body > span > span > span.select2-search.select2-search--dropdown > input", "R",)
                .click('#select2-superior-results > li.select2-results__option.select2-results__option--highlighted')
                //editando cnpj
                .setValue("#formulario_empresa > div > form > div.card-body > div > div:nth-child(5) > input", "8585",)
                //editando cep
                .setValue("#id_cep", "8585",)
                //editando numero
                .setValue("#home > div > div:nth-child(3) > input", "8585",)
                //editando bairro
                .setValue("#home > div > div:nth-child(5) > input", "8585",)
                //editando rua
                .setValue("#home > div > div:nth-child(2) > input", "8585",)
                //editando complemento
                .setValue("#home > div > div:nth-child(4) > input", "8585",)
                //editando cidade
                .setValue(" #home > div > div:nth-child(6) > input", "8585",)
                //editando estado
                .waitForElementPresent('#select2-estado-container', 10000)
                .click('#select2-estado-container')
                .click('#select2-estado-results > li:nth-child(5)')
                //clicando na aba contato
                .click('#profile-tab')
                .waitForElementVisible('#profile > div > div:nth-child(1) > input', 30000)
                //editando campo contato
                .setValue(" #profile > div > div:nth-child(1) > input", "7",)
                //editando telefone 1
                .setValue(" #profile > div > div:nth-child(3) > input", "7",)
                //editando campo outros
                .setValue(" #profile > div > div:nth-child(5) > input", "7",)
                //editando email
                .setValue(" #profile > div > div:nth-child(2) > input", "7",)
                //editando telefone 2
                .setValue(" #profile > div > div:nth-child(4) > input", "7",)

                //selecionando aba observação
                .click('#contact-tab')
                .waitForElementVisible('  #contact > div:nth-child(1) > div > textarea', 30000)
                .setValue("#contact > div:nth-child(1) > div > textarea", "7",)

                //clicando em editar anexo
                .setValue('input[type="file"]', require('path').resolve('/home/didimo/Downloads/Imagens/1.png'))

                //Clicando na aba PMOC
                .click('#pmoc-tab')
                //esperando input aparecer e editando valores
                .waitForElementVisible('  #pmoc > div > div:nth-child(1) > input', 30000)
                .waitForElementVisible('  #pmoc > div > div:nth-child(2) > input', 30000)
                .waitForElementVisible('  #pmoc > div > div:nth-child(3) > input', 30000)
                .setValue("#pmoc > div > div:nth-child(1) > input", "1",)
                .setValue("#pmoc > div > div:nth-child(2) > input", "1",)
                .setValue("#pmoc > div > div:nth-child(3) > input", "1",)

                //salvando empresa
                .click('#formulario_empresa > div > form > div.p-0.border-0.card-footer > div.button-container > button')
                .waitForElementVisible('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div > button', 30000)
                .click('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div > button')
                //excluindo empresa
                .waitForElementVisible('#main-content-wrapper > div > div.main-content > div:nth-child(10) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(3) > a', 30000)
                .click('#main-content-wrapper > div > div.main-content > div:nth-child(10) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(3) > a')
            await this.removeChat();
            this.browser
                .click('div.modal-dialog > div > div.modal-footer > form > button.btn.btn-danger')
                .click('#cadastro > ul > li:nth-child(2)')
                .click('#jump-base-3')
                //ADICIONANDO EQUIPAMENTO
                .waitForElementVisible('#formulario_equipamento > div > form > div.card-body > div > div.form-group.ark-form.ark-addon-input.col-lg-6.col-sm-12 > span > span.selection > span\n', 30000)
                .click('#formulario_equipamento > div > form > div.card-body > div > div.form-group.ark-form.ark-addon-input.col-lg-6.col-sm-12 > span > span.selection > span    \n')
            await this.removeChat();
            this.browser
                .setValue("body > span > span > span.select2-search.select2-search--dropdown > input", "banh",)
                //adicionando Tipo*:
                .waitForElementVisible('#select2-tipo-results > li:nth-child(1)', 30000)
                .click('#select2-tipo-results > li:nth-child(1)')
                //adicionando modelo
                .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(3) > input", "teste modelo '\"!@#$%&*()-+Aaç<>}70/, aãÂ")
                //adicionando fabricante
                .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(2) > input", "teste fabricante '\"!@#$%&*()-+Aaç<>}70/, aãÂ")
                //adicionando estado do equipamento
                .click('#formulario_equipamento > div > form > div.card-body > div > div:nth-child(4) > span > span.selection > span')
                .waitForElementVisible('#select2-estado-results > li.select2-results__option.select2-results__option--highlighted', 30000)
                .click('#select2-estado-results > li.select2-results__option.select2-results__option--highlighted')
                //adicionando Proprietário*:
                .click('#formulario_equipamento > div > form > div.card-body > div > div:nth-child(5) > span > span.selection > span')
                .setValue("body > span > span > span.select2-search.select2-search--dropdown > input", "a")
                .waitForElementVisible('#select2-proprietario-results > li:nth-child(1)', 30000)
                .click('#select2-proprietario-results > li:nth-child(1)')
                //adicionando  Identificação/TAG:
                .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(6) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ")
                //adicionando numero de serie
                .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(7) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ")
                //adicionando patrimonio
                .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(8) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ")
                //adicionando Portaria INMETRO:
                .setValue(" #formulario_equipamento > div > form > div.card-body > div > div:nth-child(9) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ")
                //adicionando prioridade
                .click(' #select2-prioridade-container')
                .click('#formulario_equipamento > div > form > div.card-body > div > div:nth-child(10) > span > span.selection > span > span.select2-selection__rendered')

                //selecionando Modo de Uso*:
                .click('#uso_padrao')




                .pause(20000)

        }
        if (formData.nome) {
            this.browser
                .waitForElementPresent('#formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input', 30 * 1000)
                .waitForElementPresent('#formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input', 30 * 1000)
                .assert.containsText("#formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input", "!a7çãA")


        }

    }


}
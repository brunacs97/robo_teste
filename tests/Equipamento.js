module.exports = {
    'Demo test ecosia.org': function (browser) {
        browser
        //tela de login
            .url('https://desenvolvimento.arkmeds.com/cadastros/equipamento/novo/')
            .waitForElementVisible('body')
            .setValue("#inputEmail", "a@a.com",)
            .setValue("#inputPassword", "a",)
            .click("body > div > div.col-md-12.col-lg-6.m-0.p-0.campos-login > div:nth-child(2) > div.wrapper > form > div:nth-child(4) > button")

            //ADICIONANDO EQUIPAMENTO
            .waitForElementVisible('#formulario_equipamento > div > form > div.card-body > div > div.form-group.ark-form.ark-addon-input.col-lg-6.col-sm-12 > span > span.selection > span\n', 30000)
            .click('#formulario_equipamento > div > form > div.card-body > div > div.form-group.ark-form.ark-addon-input.col-lg-6.col-sm-12 > span > span.selection > span    \n')

            //adicionando Tipo*:
            .setValue("body > span > span > span.select2-search.select2-search--dropdown > input", "banh",)
            //adicionando Tipo*:
            .waitForElementVisible('#select2-tipo-results > li:nth-child(1)', 30000)
            .click('#select2-tipo-results > li:nth-child(2)')

            //adicionando model.setElementValueo
            .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(3) > input", "teste modelo '\"!@#$%&*()-+Aaç<>}70/, aãÂ")
            //adicionando fabricante
            .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(2) > input", "teste fabricante '\"!@#$%&*()-+Aaç<>}70/, aãÂ")
            //adicionando estado do equipamento
            .click('#formulario_equipamento > div > form > div.card-body > div > div:nth-child(4) > span > span.selection > span')
            .waitForElementVisible('#select2-estado-results > li:nth-child(3)', 30000)
            .click('#select2-estado-results > li:nth-child(3)')
            //adicionando Proprietário*:
            .click('#formulario_equipamento > div > form > div.card-body > div > div:nth-child(5) > span > span.selection > span')
            .setValue("body > span > span > span.select2-search.select2-search--dropdown > input", "a")
            .waitForElementVisible('#select2-proprietario-results > li:nth-child(1)', 30000)
            // .click('#select2-proprietario-results > li:nth-child(1)')
            .click('#select2-proprietario-results > li:nth-child(4)')
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
            .waitForElementVisible('#uso_padrao', 30000)
            .click('#uso_padrao')

            //Adicionando data de fabricação
            .waitForElementVisible('#data_fabricacao', 30000)
            .setValue("#data_fabricacao", "05/01/2021")

            //adicionando data de aquisição
            .waitForElementVisible('#data_aquisicao', 30000)
            .setValue("#data_aquisicao", "05/01/2021")

            //adicionando valor de compra
            .waitForElementVisible('#valor_compra', 30000)
            .setValue("#valor_compra", "5260")

            //adicionando valor residual
            .waitForElementVisible('#valor_residual', 30000)
            .setValue("#valor_residual", "5260")

            //adicionando vida util
            .waitForElementVisible('#vida_util', 30000)
            .setValue("#vida_util", "5")

            //adicionando garantia
            .waitForElementVisible('#garantia', 30000)
            .setValue("#garantia", "05/01/2021")

            //adicionando risco de operação
            .waitForElementVisible('#home > div > div:nth-child(7) > input', 30000)
            .setValue("#home > div > div:nth-child(7) > input", "6")

            //clicando na aba informações extras
            .waitForElementVisible('#myTab > li:nth-child(2)', 30000)
            .click('#myTab > li:nth-child(2)')

            //adicionando criticidade
            .waitForElementVisible('#profile > div > div:nth-child(1) > span > span.selection > span', 30000)
            .click('#profile > div > div:nth-child(1) > span > span.selection > span')
            .waitForElementVisible('.select2-results__option', 30000)
            .click('#select2-tipo_criticidade-results > li:nth-child(3)')

            //adicionando registro da anvisa
            .waitForElementVisible('#profile > div > div:nth-child(3)', 30000)
            .setValue("#profile > div > div:nth-child(3) > input", "\"'\\\"!@#$%&*()-+Aaç<>}70/, aãÂ")

            //adicionando Descrição da Criticidade:
            .waitForElementVisible('#profile > div > div:nth-child(2) > input', 30000)
            .setValue("#profile > div > div:nth-child(2) > input", "\"'\\\"!@#$%&*()-+Aaç<>}70/, aãÂ")

            //adicionando Procedimentos:
            .waitForElementVisible('#profile > div > div:nth-child(4) > span > span.selection > span', 30000)
            .click('#profile > div > div:nth-child(4) > span > span.selection > span')
            .click('#select2-procedimento-results > li:nth-child(3)')

             //adicionando tempo atendimento
            .waitForElementVisible('#profile > div > div:nth-child(5) > input', 30000)
            .setValue("#profile > div > div:nth-child(5) > input","85")


             //adicionando tempo fechamento:
            .waitForElementVisible('#profile > div > div:nth-child(6) > input', 30000)
            .setValue("#profile > div > div:nth-child(6) > input", "70")

             //adicionando planos:
            .waitForElementVisible('#profile > div > div:nth-child(7) > span > span.selection > span > ul > li', 30000)
            .click("#profile > div > div:nth-child(7) > span > span.selection > span > ul")
            .click("#select2-plano-results > li:nth-child(3)")


            //clicando na aba informações contrato
            .waitForElementVisible('#myTab > li:nth-child(3)', 30000)
            .click('#myTab > li:nth-child(3)')

            //adicionando tipo contrato
            .waitForElementVisible('#contact > div > div:nth-child(1) > span > span.selection > span', 30000)
            .click('#contact > div > div:nth-child(1) > span > span.selection > span')
            .click('#select2-contrato-results > li:nth-child(2)')

            //adicionando informações contrato
            .waitForElementVisible('#contact > div > div:nth-child(2) > span', 30000)
            .click('#contact > div > div:nth-child(2) > span > span.selection > span')
            .setValue('body > span > span > span.select2-search.select2-search--dropdown > input',"a")
            .click('#select2-contratante-results > li:nth-child(17)')

            //adicionando dados a aba observacoes
            .click('#obs-tab')
            .setValue('input[type="file"]', require('path').resolve('/home/didimo/Imagens/1.png'))

            //adicionando observacoes
            .setValue('#obs > div:nth-child(1) > div:nth-child(3) > textarea','t')

            //salvando equipamento
            .waitForElementVisible('#formulario_equipamento > div > form > div.p-0.border-0.card-footer > div.button-container > button', 30000)
            .click('#formulario_equipamento > div > form > div.p-0.border-0.card-footer > div.button-container > button')
            .waitForElementVisible('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div > button')
            .click('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div > button')


            //EDITANDO EQUIPAMENTOS
            .waitForElementVisible('#main-content-wrapper > div > div.main-content > div:nth-child(19) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(3) > a\n')
            .click('#main-content-wrapper > div > div.main-content > div:nth-child(19) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(3) > a')

            //adicionando Tipo*:
            .waitForElementVisible('#select2-tipo-container', 30000)
            .click('#select2-tipo-container')
            .click('#select2-tipo-results > li:nth-child(222)')


            //adicionando model.setElementValueo
            .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(3) > input", "teste modelo '\"!@#$%&*()-+Aaç<>}70/, aãÂ")
            //adicionando fabricante
            .setValue("#formulario_equipamento > div > form > div.card-body > div > div:nth-child(2) > input", "teste fabricante '\"!@#$%&*()-+Aaç<>}70/, aãÂ")
            //adicionando estado do equipamento
            .click('#formulario_equipamento > div > form > div.card-body > div > div:nth-child(4) > span > span.selection > span')
            .waitForElementVisible('#select2-estado-results > li:nth-child(3)', 30000)
            .click('#select2-estado-results > li:nth-child(3)')
            //adicionando Proprietário*:
            .click('#formulario_equipamento > div > form > div.card-body > div > div:nth-child(5) > span > span.selection > span')
            .setValue("body > span > span > span.select2-search.select2-search--dropdown > input", "a")
            .waitForElementVisible('#select2-proprietario-results > li:nth-child(1)', 30000)
            // .click('#select2-proprietario-results > li:nth-child(1)')
            .click('#select2-proprietario-results > li.select2-results__option.select2-results__option--highlighted')
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
            .waitForElementVisible('#uso_equipamento', 30000)
            .click('#uso_equipamento')

            //Adicionando data de fabricação
            .waitForElementVisible('#data_fabricacao', 30000)
            .setValue("#data_fabricacao", "05/01/2021")

            //adicionando data de aquisição
            .waitForElementVisible('#data_aquisicao', 30000)
            .setValue("#data_aquisicao", "05/01/2021")

            //adicionando valor de compra
            .waitForElementVisible('#valor_compra', 30000)
            .setValue("#valor_compra", "5260")

            //adicionando valor residual
            .waitForElementVisible('#valor_residual', 30000)
            .setValue("#valor_residual", "5260")

            //adicionando vida util
            .waitForElementVisible('#vida_util', 30000)
            .setValue("#vida_util", "5")

            //adicionando garantia
            .waitForElementVisible('#garantia', 30000)
            .setValue("#garantia", "05/01/2021")

            //adicionando risco de operação
            .waitForElementVisible('#home > div > div:nth-child(7) > input', 30000)
            .setValue("#home > div > div:nth-child(7) > input", "6")

            //clicando na aba informações extras
            .waitForElementVisible('#myTab > li:nth-child(2)', 30000)
            .click('#myTab > li:nth-child(2)')

            //adicionando criticidade
            .waitForElementVisible('#profile > div > div:nth-child(1) > span > span.selection > span', 30000)
            .click('#profile > div > div:nth-child(1) > span > span.selection > span')
            .waitForElementVisible('.select2-results__option', 30000)
            .click('#select2-tipo_criticidade-results > li:nth-child(3)')

            //adicionando registro da anvisa
            .waitForElementVisible('#profile > div > div:nth-child(3)', 30000)
            .setValue("#profile > div > div:nth-child(3) > input", "a")

            //adicionando Descrição da Criticidade:
            .waitForElementVisible('#profile > div > div:nth-child(2) > input', 30000)
            .setValue("#profile > div > div:nth-child(2) > input", "\"'\\\"teste")

            //adicionando Procedimentos:
            .waitForElementVisible('#profile > div > div:nth-child(4) > span > span.selection > span', 30000)
            .click('#profile > div > div:nth-child(4) > span > span.selection > span')
            .click('#select2-procedimento-results > li:nth-child(3)')

             //adicionando tempo atendimento
            .waitForElementVisible('#profile > div > div:nth-child(5) > input', 30000)
            .setValue("#profile > div > div:nth-child(5) > input","85")


             //adicionando tempo fechamento:
            .waitForElementVisible('#profile > div > div:nth-child(6) > input', 30000)
            .setValue("#profile > div > div:nth-child(6) > input", "70")

             //adicionando planos:
            .waitForElementVisible('#profile > div > div:nth-child(7) > span > span.selection > span > ul > li', 30000)
            .click("#profile > div > div:nth-child(7) > span > span.selection > span > ul")
            .click("#select2-plano-results > li:nth-child(3)")


            //clicando na aba informações contrato
            .waitForElementVisible('#myTab > li:nth-child(3)', 30000)
            .click('#myTab > li:nth-child(3)')

            //adicionando tipo contrato
            .waitForElementVisible('#contact > div > div:nth-child(1) > span > span.selection > span', 30000)
            .click('#contact > div > div:nth-child(1) > span > span.selection > span')
            .click('#select2-contrato-results > li:nth-child(2)')

            //adicionando informações contrato
            .waitForElementVisible('#contact > div > div:nth-child(2) > span', 30000)
            .click('#contact > div > div:nth-child(2) > span > span.selection > span')
            .setValue('body > span > span > span.select2-search.select2-search--dropdown > input',"a")
            .click('#select2-contratante-results > li:nth-child(17)')

            //adicionando dados a aba observacoes
            .click('#obs-tab')
            .setValue('input[type="file"]', require('path').resolve('/home/didimo/Imagens/1.png'))

            //adicionando observacoes
            .setValue('#obs > div:nth-child(1) > div:nth-child(3) > textarea','s')

            //salvando equipamento
            .click('#formulario_equipamento > div > form > div.p-0.border-0.card-footer > div.button-container > button')
            .click('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div > button')

            //excluindo
            .waitForElementVisible('tr:nth-child(1) > td:nth-child(4) > a',30000)
            .click('#main-content-wrapper > div > div.main-content > div:nth-child(19) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(4) > a')
            .click('div.modal-dialog > div > div.modal-footer > form > button:nth-child(3)')

          .pause(20000)




     }
}


module.exports = {

    'Demo test ecosia.org': function (browser) {

        browser
        //tela de login
            .url('https://desenvolvimento.arkmeds.com/cadastros/procedimento/')
            .waitForElementVisible('body')
            .setValue("#inputEmail", "a@a.com",)
            .setValue("#inputPassword", "a",)
            .click("body > div > div.col-md-12.col-lg-6.m-0.p-0.campos-login > div:nth-child(2) > div.wrapper > form > div:nth-child(4) > button")

            //ADICIONANDO PROCEDIMENTOS
            .click("#main-content-wrapper > div > div.main-header > div")

            //adicionando tipo procedimento
            .click('#id_tipo_procedimento_1')

            //adicionando titulo de procedimento
            .setValue('#titulo_procedimento', "titulo procedimento")

            //adicionando titulo ordem servico
            .setValue('#novo_titulo_os', "titulo ordem de servico")

            //adicionando tipo do procedimento
            .click('#div_id_tipo_novo > div > span > div > button')
            .click('#div_id_tipo_novo > div > span > div > ul > li:nth-child(3)')
            .click('#div_id_tipo_novo > div > span > div > ul > li:nth-child(2)')

            //adicionando frequencia
            .waitForElementVisible('#div_id_frequencia > div > span > div > button', 3000)
            .click('#div_id_tipo_novo > div > span > div > button')
            .click('#div_id_frequencia > div > span > div > button')
            .click('#div_id_frequencia > div > span > div > ul > li:nth-child(2) > a')
            .click('#div_id_frequencia > div > span > div > ul > li:nth-child(3) > a')
            .click('#div_id_frequencia > div > span > div > button')

            // //adicionando checklists
            .click('#div_id_checklists_novo > div > span > div > button')
            .click('#div_id_checklists_novo > div > span > div > ul > li:nth-child(4) > a')
            .click('#div_id_checklists_novo > div > span > div > ul > li:nth-child(5) > a')
            .click('#div_id_checklists_novo > div > span > div > button')

            //adicionando escopo
            .setValue('#escopo_procedimento', "teste escopo")
            //Adicionando resumo
            .setValue('#resumo_procedimento', "teste resumo")

            //adicionando conteudo
            .setValue('#conteudo_procedimento', "teste conteudo")

            //Adicionando anexo
            .setValue('input[type="file"]', require('path').resolve('/home/didimo/Downloads/1.67.0.pdf'))

            //carregando templete
            .click('#botao_calibracao')

            //removendo chat
            .waitForElementPresent('#crisp-chatbox', 30000)
            .execute(function () {
                document.querySelector('#crisp-chatbox').innerHTML = '';
            })
            //preenchendo templete de calibração
            .setValue('#titulo0', "titulo calibração")
            .setValue('#unidade0', "unidade calibração")
            .click("#select2-confiabilidade0-container")
            .click("#select2-confiabilidade0-results > li.select2-results__option.select2-results__option--highlighted")
            .click("#select2-criterio-aceitacao0-container")
            .click("#select2-criterio-aceitacao0-results > li.select2-results__option.select2-results__option--highlighted")
            .setValue("#valor-criterio0", "9999999999999999999999999999999999999999999")
            .setValue("#tabela0 > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > input", "9999999999999999999999999999999999999999999")
            .setValue("#tabela0 > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > input", "9999999999999999999999999999999999999999999")
            .setValue("#tabela0 > table > tbody > tr:nth-child(3) > td:nth-child(1) > div > input", "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
            .click("#salvar-template-calibracao")

            //carregando templete manutenção corretiva
            .waitForElementVisible('#botao_corretiva', 30000)
            .click('#botao_corretiva')
            .setValue('#tempo_maximo_espera', '99')
            .setValue('#tempo_maximo_fechamento', '99')
            .setValue('#lista_email_abertura_chamado', 'eubrunacds@gmail.com')
            .waitForElementVisible('#salvar-template-corretiva', 30000)
            .click('#salvar-template-corretiva')

            //adicionando padroes
            .waitForElementVisible('#div_id_padroes > div > span > div > button > span', 3000)
            .click('#div_id_padroes > div > span > div > button > span')
            .click('#div_id_padroes > div > span > div > ul > li:nth-child(9) > a')
            .click('#div_id_padroes > div > span > div > ul > li:nth-child(10) > a')
            .click('#div_id_padroes > div > span > div > button > span')

            //adicionando equipamentos
            .click('#select2-id_empresa-container')
            .setValue('body > span > span > span.select2-search.select2-search--dropdown > input', "a")
            .click('#select2-id_empresa-results > li:nth-child(3)')

            // .execute("$(\"#select2-id_tipo-container\").trigger(\"click\")")
            // .execute("$(\"#div_id_tipo > div > span > span.selection > span > span:nth-child(1)\").trigger(\"click\")")
            // .execute("$(\"#id_tipo\").trigger(\"click\")")
            // .execute("$(\"#div_id_tipo > div > select\").trigger(\"click\")")
            // .execute("$(\"#div_id_tipo > div > span > span.selection > span > span.select2-selection__arrow\").trigger('click')")


            .setValue('#multi_select > table > tbody > tr > td:nth-child(1) > div > div > table > tbody > tr > td:nth-child(3) > input', 'a')
            .keys(browser.Keys.ENTER)

            //EDITANDO PROCEDIMENTOS
            .click('#main-content-wrapper > div > div.main-content > div:nth-child(10) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')

            //adicionando tipo procedimento
            .click('#id_tipo_procedimento_2')

            //adicionando titulo de procedimento
            .setValue('#titulo_procedimento', "titulo procedimento editar")

            //adicionando titulo ordem servico
            .setValue('#novo_titulo_os', "titulo ordem de servico editar")

            //adicionando tipo do procedimento
            .click('#div_id_tipo_novo > div > span > div > button')
            .click('#div_id_tipo_novo > div > span > div > ul > li:nth-child(4)')
            .click('#div_id_tipo_novo > div > span > div > ul > li:nth-child(5)')

            //adicionando frequencia
            .waitForElementVisible('#div_id_frequencia > div > span > div > button', 3000)
            .click('#div_id_tipo_novo > div > span > div > button')
            .click('#div_id_frequencia > div > span > div > button')
            .click('#div_id_frequencia > div > span > div > ul > li:nth-child(4) > a')
            .click('#div_id_frequencia > div > span > div > ul > li:nth-child(5) > a')
            .click('#div_id_frequencia > div > span > div > button')

            // //adicionando checklists
            .click('#div_id_checklists_novo > div > span > div > button')
            .click('#div_id_checklists_novo > div > span > div > ul > li:nth-child(6) > a')
            .click('#div_id_checklists_novo > div > span > div > ul > li:nth-child(7) > a')
            .click('#div_id_checklists_novo > div > span > div > button')

            //adicionando escopo
            .setValue('#escopo_procedimento', "teste escopo editar")
            //Adicionando resumo
            .setValue('#resumo_procedimento', "teste resumo editar")

            //adicionando conteudo
            .setValue('#conteudo_procedimento', "teste conteudo editar")

            //Adicionando anexo
            .setValue('input[type="file"]', require('path').resolve('/home/didimo/Downloads/1.67.0.pdf'))

            //carregando templete
            .click('#botao_calibracao')

            //removendo chat
            .waitForElementPresent('#crisp-chatbox', 30000)
            .execute(function () {
                document.querySelector('#crisp-chatbox').innerHTML = '';
            })
            //preenchendo templete de calibração
            .setValue('#titulo0', "titulo calibração")
            .setValue('#unidade0', "unidade calibração")
            .click("#select2-confiabilidade0-container")
            .click("#select2-confiabilidade0-results > li.select2-results__option.select2-results__option--highlighted")
            .click("#select2-criterio-aceitacao0-container")
            .click("#select2-criterio-aceitacao0-results > li.select2-results__option.select2-results__option--highlighted")
            .setValue("#valor-criterio0", "9999999999999999999999999999999999999999999")
            .setValue("#tabela0 > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > input", "9999999999999999999999999999999999999999999")
            .setValue("#tabela0 > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > input", "9999999999999999999999999999999999999999999")
            .setValue("#tabela0 > table > tbody > tr:nth-child(3) > td:nth-child(1) > div > input", "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
            .click("#salvar-template-calibracao")

            //carregando templete manutenção corretiva
            .waitForElementVisible('#botao_corretiva', 30000)
            .click('#botao_corretiva')
            .setValue('#tempo_maximo_espera', '99')
            .setValue('#tempo_maximo_fechamento', '99')
            .setValue('#lista_email_abertura_chamado', ',bruna@gmail.com')
            .waitForElementVisible('#salvar-template-corretiva', 30000)
            .click('#salvar-template-corretiva')

            //adicionando padroes
            .waitForElementVisible('#div_id_padroes > div > span > div > button > span', 3000)
            .click('#div_id_padroes > div > span > div > button > span')
            .click('#div_id_padroes > div > span > div > ul > li:nth-child(7) > a')
            .click('#div_id_padroes > div > span > div > ul > li:nth-child(8) > a')
            .click('#div_id_padroes > div > span > div > button > span')
            .click('#main-content-wrapper > div > div.main-content > form > div.form-actions > button')

            //excluindo procedimentos
            .click('#main-content-wrapper > div > div.main-content > div:nth-child(10) > div > div > div.widget-content.list > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(2) > a > span')
            .click('form > button:nth-child(3)')


            .pause(2000)


    }
}


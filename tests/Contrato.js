module.exports = {
    'Demo test ecosia.org': function (browser) {
        browser
        //tela de login
            .url('https://desenvolvimento.arkmeds.com/contrato/')
            .waitForElementVisible('body')
            .setValue("#inputEmail", "a@a.com",)
            .setValue("#inputPassword", "a",)
            .click("body > div > div.col-md-12.col-lg-6.m-0.p-0.campos-login > div:nth-child(2) > div.wrapper > form > div:nth-child(4) > button")

            //ADICIONANDO CONTRATO
            .click("#main-content-wrapper > div > div.main-header > div > a")
            //Adicionando nome
            .setValue("#id_nome", "Teste nome contrato")
            //Adicionando apelido
            .setValue("#id_apelido", "Teste apelido contrato")
            //Selecionando contratante
            .click("#select2-id_contratante-container")
            .click("#select2-id_contratante-results > li:nth-child(2)")
            //Adicionando Planos
            .click('#div_id_planos > div > span > div > button')
            .click('#div_id_planos > div > span > div > ul > li.multiselect-item.multiselect-all > a')
            //Adicionando Data Inicial*
            .setValue("#id_data_inicio","12012021")
            //Adicionando Data Final
            .setValue("#id_data_final", "08122021")
            //Adicionando Descrição
            .setValue('#id_descricao', "Teste descrição contrato")
            //Adicionando Obrigações
            .setValue("#id_obrigacao","Teste obrigacao contrato")
            //Adicioando Observações
            .setValue('#id_observacao',"Teste oberservacao contrato")
            //Adicioando Valor Mensal (R$)*
            .setValue("#id_valor","!@#$%&*()-+Aaç<>}70/, aãÂ")
            //Salvando contrato
            .click("#form-contrato > div.form-actions > button")

            //EDITANDO contrato
            .click("#main-content-wrapper > div > div.main-content > div.widget.widget-table > div.widget-content.list > div.table-responsive > table > tbody:nth-child(2) > tr > td:nth-child(2) > a > span")
            //Adicionando nome
            .setValue("#id_nome", "Teste edicao nome contrato")
            //Adicionando apelido
            .setValue("#id_apelido", "Teste  edicao apelido contrato")
            //Selecionando contratante
            .click("#select2-id_contratante-container")
            .click("#select2-id_contratante-results > li:nth-child(3)")
            //Adicionando Planos
            .click('#div_id_planos > div > span > div > button')
            .click('#div_id_planos > div > span > div > ul > li:nth-child(5) > a')
            //Adicionando Data Inicial*
            .setValue("#id_data_inicio","12012022")
            //Adicionando Data Final
            .setValue("#id_data_final", "")
            //Adicionando Descrição
            .setValue('#id_descricao', "Teste edicao descrição contrato")
            //Adicionando Obrigações
            .setValue("#id_obrigacao","Teste edicao obrigacao contrato")
            //Adicioando Observações
            .setValue('#id_observacao',"Teste edicao oberservacao contrato")
            //Adicioando Valor Mensal (R$)*
            .setValue("#id_valor","!@#$%&*()-+Aaç<>}707/, aãÂ")
            //Adicionando anexo
            .setValue('input[type="file"]', require('path').resolve('/home/didimo/Imagens/1.png'))

            //Salvando contrato
            .click("#form-contrato > div.form-actions > button")

            //excluindo
            .click('#main-content-wrapper > div > div.main-content > div.widget.widget-table > div.widget-content.list > div.table-responsive > table > tbody:nth-child(2) > tr > td:nth-child(3) > a')
            .click('#myModal > div.modal-dialog > div > div.modal-footer > form > button.btn.btn-danger')

            .pause(2000)




     }
}


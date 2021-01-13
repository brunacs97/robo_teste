module.exports = {

    'Demo test ecosia.org': function (browser) {

        browser
        //tela de login
            .url('https://desenvolvimento.arkmeds.com/cadastros/checklist_novo/')
            .waitForElementVisible('body')
            .setValue("#inputEmail", "a@a.com",)
            .setValue("#inputPassword", "a",)
            .click("body > div > div.col-md-12.col-lg-6.m-0.p-0.campos-login > div:nth-child(2) > div.wrapper > form > div:nth-child(4) > button")

            //ADICIONANDO Checklists
            .click("#main-content-wrapper > div > div.main-header > div")

            //titulo checklist
            .setValue("#div_id_titulo > div > input[type=text]", "titulo checklists")

            //tipo texto
            .waitForElementVisible("div.form-group.col-sm-8")
            .setValue("#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div > div.form-group.col-sm-8 > input[type=text]", "titulo checklists")

            //removendochat
            .waitForElementPresent('#crisp-chatbox', 30000)
            .execute(function () {
                document.querySelector('#crisp-chatbox').innerHTML = '';
            })

            .click('#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div > div:nth-child(3) > div > a.btn.btn-sm.add-item')
            .setValue('#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div:nth-child(2) > div.form-group.col-sm-8 > input[type=text]',"teste 2")

            //Escolhendo numero como tipo de checklists
            .click('#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div:nth-child(2) > div.form-group.col-sm-2 > span > div > button')
            .click('#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div:nth-child(2) > div.form-group.col-sm-2 > span > div > ul > li.option-number > a')
            .click('#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div:nth-child(2) > div:nth-child(3) > div > a.btn.btn-sm.add-item')


             //Escolhendo opcoes como tipo de checklists
            .click('#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div:nth-child(2) > div.form-group.col-sm-2 > span > div > button')
            .click('#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div:nth-child(2) > div.form-group.col-sm-2 > span > div > ul > li.option-boolean > a')
            .click('#main-content-wrapper > div > div.main-content > form > div > div > div > div > div.widget-content > div.row.items-row > div:nth-child(2) > div:nth-child(3) > div > a.btn.btn-sm.add-item')
            .pause(2000)


    }
}


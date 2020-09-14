//
// module.exports = {
//     'Demo test ecosia.org': function (browser) {
//         browser
//         //tela de login
//             .url('https://desenvolvimento.arkmeds.com/usuarios/conectar?next=/')
//             .waitForElementVisible('body')
//             .setValue("#inputEmail", "a@a.com",)
//             .setValue("#inputPassword", "a",)
//             .click('button[type=submit]')
//
//             //clicando em cadastro e consulta
//             .waitForElementVisible('body')
//             .click('#cadastro > a')
//             //clicando em empresas e clientes
//             .click('#jump-base-2')
//             //clicando no botão adicionar de empresas
//             .click('#jump-base-3')
//
//             //esperando carregar o chat
//             .waitForElementVisible('body')
//             //preenchendo campo nome
//             .setValue("#formulario_empresa > div > form > div.card-body > div > div:nth-child(1) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
//
//             //preenchendo campo nome fantasia
//             .setValue("#formulario_empresa > div > form > div.card-body > div > div:nth-child(2) > input", "'\"!@#$%&*()-+Aaç<>}70/, aãÂ",)
//
//             //selecionando um tipo de empresa
//             .click('#formulario_empresa > div > form > div.card-body > div > div:nth-child(3) > span > span.selection > span')
//             .click('#select2-tipo-results > li:nth-child(2)')
//
//             //selecionando um superior
//             .click('#formulario_empresa > div > form > div.card-body > div > div:nth-child(4) > span > span.selection > span')
//             .click('body > span > span > span.select2-search.select2-search--dropdown > input')
//             .setValue("body > span > span > span.select2-search.select2-search--dropdown > input", "AAA",)
//             .click('#select2-superior-results > li.select2-results__option.select2-results__option--highlighted')
//
//             //adicionando cnpj
//             .setValue("#formulario_empresa > div > form > div.card-body > div > div:nth-child(5) > input", "114693",)
//
//
//             //adicionando cep
//             .setValue("#id_cep", "!@#$%&*()-+Aaç<>}70/, aãÂ",)
//
//             //salvando rua
//             .setValue("#home > div > div:nth-child(2) > input", "!@#$%&*()-+Aaç<>}70/, aãÂ",)
//
//             //salvando numero
//             .setValue("#home > div > div:nth-child(3) > input", "70",)
//
//             //salvando complemento
//             .setValue("#home > div > div:nth-child(4) > input", "!@#$%&*()-+Aaç<>}70/, aãÂ",)
//
//             //salvando bairro
//             .setValue("#home > div > div:nth-child(5) > input", "!@#$%&*()-+Aaç<>}70/, aãÂ",)
//
//             //salvando cidade
//             .setValue("#home > div > div:nth-child(6) > input", "!@#$%&*()-+Aaç<>}70/, aãÂ",)
//
//             //salvando estado
//             .click('#home > div > div:nth-child(7) > span > span.selection > span')
//             .click('#select2-estado-results > li:nth-child(3)')
//
//             //salvando empresa
//             .click('#formulario_empresa > div > form > div.p-0.border-0.card-footer > div.button-container > button')
//
//
//             // .waitForElementVisible('body')
//             // .click('body > div.o_home_menu.o_tooltip_parent > div.o_home_menu_scrollable > div.o_apps > a:nth-child(17)')
//             // .waitForElementVisible('body')
//             // .click('body > div.o_action_manager > div > div.o_content > div > div.oe_kanban_color_11.oe_kanban_global_click.o_has_icon.o_kanban_record')
//             // .waitForElementVisible('body')
//             // .click('body > div.o_action_manager > div > div.o_content > div > div:nth-child(2) > div.o_kanban_header > div.o_kanban_header_title > span.o_kanban_quick_add')
//             // .waitForElementVisible('body')
//             // .setValue("body > div.o_action_manager > div > div.o_content > div > div:nth-child(2) > div.o_kanban_quick_create > div.o_action.o_view_controller > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > input", "Bruna Teste automatizado arkmeds",)
//             // .click('body > div.o_action_manager > div > div.o_content > div > div:nth-child(2) > div.o_kanban_quick_create > div:nth-child(2) > button.btn.btn-primary.o_kanban_add')
//             // .pause(20000)
//             //
//             // .assert.titleContains('Ecosia')
//             // .assert.visible('input[type=search]')
//             // .setValue('input[type=search]', 'nightwatch')
//             // .assert.visible('button[type=submit]')
//             // .click('button[type=submit]')
//             .assert.containsText('.mainline-results', 'Nightwatch.js')
//             .end();
//     }
// };

const empresa = require('./../Classes/Empresa');
const Empresa = new empresa();

module.exports = {
    "Init": browser => Empresa.init(browser),
    "Logar": () => Empresa.login(),
    "Primero Cadastro": () => Empresa.create({
    	"params": {
    		"nome": "teste",
	        "nomeFantasia": "Fantasia",
	        "cnpj": "123123123",
	        "cep": "123123",
	        "rua": "Rua",
	        "numero": "22",
	        "complemento": "complemento",
	        "bairro": "bairro",
	        "cidade": "cidade"
    	}
    }),
    /*"Segundo Cadastro": () => Empresa.create({
    	"params": {
    		"nome": "NOME",
	        "nomeFantasia": "Fantasia",
	        "cnpj": "123123123",
	        "cep": "123123",
	        "rua": "Rua",
	        "numero": "22",
	        "complemento": "complemento",
	        "bairro": "bairro",
	        "cidade": "cidade",
    	},
    	"cnpjDuplicado": true
    }),*/
}
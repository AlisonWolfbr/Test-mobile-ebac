const loginPage = require('../pageobjects/login.page')
const homePage = require('../pageobjects/home.page')
const assert = require('assert')

describe('Login - EBAC Shop', () => {
    it('deve realizar login com usuário de teste', async () => {
        const email = 'teste.ebac@ebac.com'
        const password = '123456'

        await loginPage.login(email, password)
        await browser.pause(3000)

        const welcome = await (await homePage.welcomeMessage).getText()
        assert.ok(welcome && welcome.length > 0, 'Mensagem de boas-vindas não encontrada')
    })
})
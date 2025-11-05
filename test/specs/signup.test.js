const signupPage = require('../pageobjects/signup.page')
const profilePage = require('../pageobjects/profile.page')
const homePage = require('../pageobjects/home.page')

describe('Cadastro de usuário - EBAC Shop', () => {
    it('deve cadastrar um usuário com dados fixos e verificar perfil', async () => {
        
        const firstName = 'Teste'
        const lastName = 'EBAC'
        const email = 'teste+ebac@ebac.com'
        const password = '123456'

        
        await signupPage.signup(firstName, lastName, email, password)

        
        await browser.pause(3000)
        await homePage.openProfile()
        await browser.pause(2000)

        
        const nameText = await (await profilePage.profileName).getText()
        if (!nameText.includes(firstName)) {
            throw new Error('Nome do perfil não corresponde ao usuário cadastrado: ' + nameText)
        }
    })
})
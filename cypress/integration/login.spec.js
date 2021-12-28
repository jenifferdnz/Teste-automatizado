/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context ('Funcionalidade login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta/')

    });
    
    afterEach(() => {
        cy.screenshot()
    });
    

    it.only('Deve fazer login com sucesso', ()=> {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')

    })

    it("Deve exibir uma mensagem de erro ao inserir usuário inválido", ()=> {
        cy.get('.woocommerce-form > :nth-child(1) > label').type('@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > label').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: O usuário @teste.com não está')

    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('.woocommerce-form > :nth-child(1) > label').type(perfil.usuario)
        cy.get('.woocommerce-form > :nth-child(2) > label').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        
    });

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil.json').then(dados => {
            cy.get('.woocommerce-form > :nth-child(1) > label').type(dados.usuario)
            cy.get('.woocommerce-form > :nth-child(2) > label').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should('contain', 'Minha conta')
        })
        
    });

    it("Deve exibir uma mensagem de erro ao inserir senha inválida", ()=> {
        cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > label').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })
})
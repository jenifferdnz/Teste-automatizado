/// <reference types="cypress" />

context ('Funcionalidade login', () =>{

    it ('Deve fazer login com sucesso', ()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > label').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')

    })

    it("Deve exibir uma mensagem de erro ao inserir usuário inválido", ()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('.woocommerce-form > :nth-child(1) > label').type('@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > label').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: O usuário @teste.com não está')

    })

    it("Deve exibir uma mensagem de erro ao inserir senha inválida", ()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > label').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })
})
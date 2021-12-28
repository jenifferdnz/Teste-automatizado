///<reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });    

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
    });
})
# Conhecimento sobre testes End to End (ponta a ponta)


## Sobre o Cypress:
### Testes feitos do sistema para ver como um usuário se comportaria, esses testes é feito <br> com o intuito de verificar se uma função que puxa uma rota da api está funcionando ou <br> qualquer ação feita  pelo teste está funcionando como devido.<br> Cypress permite escrever todos os tipos de testes:

- Ponta a Ponta
- Testes de integração
- Testes unitários

## Documentação:

- [Cypress](https://docs.cypress.io/guides/overview/why-cypress?utm_medium=Nav&utm_campaign=Docs&utm_source=Test+Runner)

- [Cypress with Angular](https://testing-angular.com/end-to-end-testing/)

### Install Cypress: 
- `ng add @cypress/schematic`;
- Selecione `Mocha` para os testes unitários;


### Vai ser criado uma pasta chamada `Cypress` que dentro dela terá outra pasta escrita `integration` onde você vai conseguir criar seus testes, um arquivo criado automaticamente junto com a instalação, que é chamado `spec.ts`

### Codigo de exemplo: <br>
 
```
describe('Modal Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title()
    cy.contains('TestsE2E')
  })
})
```

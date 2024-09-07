# Graphql Test

## Visão Geral

Este projeto é um monorepo construído com Lerna, que inclui uma API GraphQL para o desafio de backend e um frontend para a interface do usuário. O objetivo do projeto é demonstrar a integração entre uma API GraphQL e uma aplicação frontend.

Para mais informações sobre Lerna, visite [Lerna.js](https://lerna.js.org/).

## Executando Scripts

Para executar os scripts presentes nos arquivos `package.json`, utilize os seguintes comandos:

- **Executar comandos em todos os pacotes**:

- `yarn lerna run` + comando (ex: `yarn lerna run test:coverage`)
- Em um projeto específico `yarn lerna run start --scope=backend`, o scope é o name que está no package.json
- Também é possível executar os comandos normalmente entrando na pasta especifica do projeto.

## Backend

### Configuração

- O projeto está configurado para Node.js 18.
- Execute yarn na raiz do projeto para instalar as dependências.
- O projeto está configurado para usar um banco de dados MongoDB de testes.
- As configurações do banco de dados estão no arquivo src/memoryDB/connection.ts.
- Um usuário já está cadastrado com o e-mail desafio@bondy.com.br e a senha 123456, que está salva de forma encriptada utilizando a lib bcrypt.
- Ao rodar o projeto com yarn start, a URL do Playground para testes de GraphQL será exibida no console.

## Frontend

### Configuração

- Certifique-se de que o backend esteja rodando antes de iniciar o frontend.
- O frontend está configurado para se conectar com o backend e realizar consultas GraphQL.

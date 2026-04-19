# Projeto 02 — API de Profissionais de Saúde

## Descrição

Este projeto consiste no desenvolvimento de uma API em JavaScript com **Node.js** e **Express** para consulta da disponibilidade dos profissionais de uma clínica de saúde.

A API utiliza um arquivo **JSON local** como fonte de dados, atendendo ao requisito de leitura de arquivo local. Nesse arquivo são armazenadas informações como:

* nome do profissional;
* especialidade;
* horários disponíveis.

Foram desenvolvidas rotas para:

* listar todos os profissionais;
* listar as especialidades disponíveis;
* filtrar profissionais por especialidade;
* buscar profissionais pelo nome.

A rota de especialidades remove itens repetidos, exibindo apenas os nomes únicos das áreas médicas. Já a busca por nome funciona com **query string**, permitindo pesquisar parte do nome do profissional.

A solução foi construída de forma simples, organizada e funcional, sendo adequada para a disciplina de Desenvolvimento Web, pois demonstra conceitos de:

* servidor;
* rotas;
* leitura de arquivo JSON;
* manipulação de dados em JavaScript.

---

## Como executar o projeto

### 1. Criar a pasta do projeto

No terminal:

```bash
mkdir projeto-api-clinica
cd projeto-api-clinica
```

### 2. Inicializar o Node.js

```bash
npm init -y
```

### 3. Instalar o Express

```bash
npm install express
```

### 4. Criar a estrutura

Crie:

* a pasta `dados`
* o arquivo `dados/profissionais.json`
* o arquivo `server.js`

### 5. Executar a API

```bash
node server.js
```

O servidor ficará disponível em:

```text
http://localhost:3000
```

---

## Rotas da API

### Listar todos os profissionais

```http
GET /profissionais
```

Exemplo:

```text
http://localhost:3000/profissionais
```

### Listar especialidades

```http
GET /especialidades
```

Exemplo:

```text
http://localhost:3000/especialidades
```

### Filtrar por especialidade

```http
GET /profissionais/especialidade/:especialidade
```

Exemplo:

```text
http://localhost:3000/profissionais/especialidade/Cardiologia
```

### Buscar por nome

```http
GET /profissionais/busca?nome=mariana
```

Exemplo:

```text
http://localhost:3000/profissionais/busca?nome=mariana
```

---

## Tecnologias Utilizadas

* Node.js
* Express
* JavaScript
* JSON

---

## Autor

Desenvolvido para a disciplina de **Desenvolvimento Web**.

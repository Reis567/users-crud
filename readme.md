# User CRUD with Node.js, Express.js, and MongoDB
By Reis567
Portuguese version at the end

This is a simple example of a Node.js application that performs CRUD (Create, Read, Update, Delete) operations on a collection of users in a MongoDB database. The application uses the Express.js framework to create HTTP routes for these operations.

## Prerequisites

- Node.js installed (v14.x or higher recommended)
- MongoDB installed and configured
- Environment variables set up in the `.env` file (see `.env.example` for an example)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project's root and configure the necessary environment variables (refer to `.env.example` for an example).

4. Start the server:

   ```bash
   npm start
   ```

## Usage

The application has the following routes for performing CRUD operations:

- **Create User (POST):** `/users`
  - Send a JSON with the fields `firstName`, `lastName`, `email`, and `password` in the request body.

- **List All Users (GET):** `/users`
  - Returns a list of all users in the database.

- **List a User by ID (GET):** `/users/:id`
  - Replace `:id` with the ID of the user you want to retrieve.

- **Update User by ID (PATCH):** `/users/:id`
  - Replace `:id` with the ID of the user you want to update.
  - Send a JSON with the fields you want to update in the request body.

- **Delete User by ID (DELETE):** `/users/:id`
  - Replace `:id` with the ID of the user you want to delete.

## Usage Examples

### Create a New User

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}' http://localhost:8080/users
```

### List All Users

```bash
curl http://localhost:8080/users
```

### List a User by ID

```bash
curl http://localhost:8080/users/USER_ID
```

### Update a User by ID

```bash
curl -X PATCH -H "Content-Type: application/json" -d '{
  "firstName": "Updated",
  "lastName": "User"
}' http://localhost:8080/users/USER_ID
```

### Delete a User by ID

```bash
curl -X DELETE http://localhost:8080/users/USER_ID
```

Remember to replace `USER_ID` with the actual ID of the user you want to retrieve, update, or delete.

## Contribution

Feel free to contribute improvements to this application or report issues by opening an issue in the repository.


Please replace "your-username" and "your-repository" with the actual GitHub username and repository name where your project is hosted. You can customize this README further to include any specific instructions or information related to your project.


## PORTUGUÊS

# CRUD de Usuários com Node.js, Express.js e MongoDB

Este é um exemplo simples de um aplicativo Node.js que realiza operações CRUD (Create, Read, Update, Delete) em uma coleção de usuários em um banco de dados MongoDB. O aplicativo utiliza o framework Express.js para criar rotas HTTP para realizar essas operações.

## Pré-requisitos

- Node.js instalado (v14.x ou superior recomendado)
- MongoDB instalado e configurado
- Variáveis de ambiente configuradas no arquivo `.env` (consulte `.env.example` para um exemplo)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias (consulte `.env.example` para um exemplo).

4. Inicie o servidor:

   ```bash
   npm start
   ```

## Uso

O aplicativo possui as seguintes rotas para realizar operações CRUD:

- **Criar Usuário (POST):** `/users`
  - Envie um JSON com os campos `firstName`, `lastName`, `email` e `password` no corpo da solicitação.

- **Listar Todos os Usuários (GET):** `/users`
  - Retorna uma lista de todos os usuários no banco de dados.

- **Listar um Usuário por ID (GET):** `/users/:id`
  - Substitua `:id` pelo ID do usuário que você deseja buscar.

- **Atualizar Usuário por ID (PATCH):** `/users/:id`
  - Substitua `:id` pelo ID do usuário que você deseja atualizar.
  - Envie um JSON com os campos que deseja atualizar no corpo da solicitação.

- **Excluir Usuário por ID (DELETE):** `/users/:id`
  - Substitua `:id` pelo ID do usuário que você deseja excluir.

## Exemplos de Uso

### Criar um Novo Usuário

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}' http://localhost:8080/users
```

### Listar Todos os Usuários

```bash
curl http://localhost:8080/users
```

### Listar um Usuário por ID

```bash
curl http://localhost:8080/users/ID_DO_USUARIO
```

### Atualizar um Usuário por ID

```bash
curl -X PATCH -H "Content-Type: application/json" -d '{
  "firstName": "Updated",
  "lastName": "User"
}' http://localhost:8080/users/ID_DO_USUARIO
```

### Excluir um Usuário por ID

```bash
curl -X DELETE http://localhost:8080/users/ID_DO_USUARIO
```

Lembre-se de substituir `ID_DO_USUARIO` pelo ID real do usuário que você deseja buscar, atualizar ou excluir.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este aplicativo ou reportar problemas abrindo uma issue no repositório.

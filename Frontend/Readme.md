# Projeto Fullstack para controle de Equipamentos e Setores

Este projeto Fullstack tem como objetivo criar uma aplicação para o controle de equipamentos e setores em uma empresa. A aplicação permitirá o cadastro, atualização, remoção e visualização de informações relacionadas aos equipamentos utilizados pela empresa. Podendo na busca obter todos os equipamentos, ou apenas aqueles correspondentes a busca.

# Tecnologias Utilizadas

### FRONTEND

Tecnologias Utilizadas no Frontend:
HTML, CSS, JavaScript, foram usados como base para construção da interface do usuário.

### BACKEND

Node.js: Ambiente de execução JavaScript do lado do servidor.
Express.js: Framework para construção de aplicativos web em Node.js.
MySQL: Banco de dados relacional para armazenamento persistente dos dados.

### Uso da Aplicação

Para utilizar a aplicação, existem diversas opções:

#### Navegador:

Acesse a aplicação através do navegador utilizando o endereço http://localhost:3000.
Utilize a interface amigável para realizar operações de cadastro, atualização e remoção de equipamentos e setores.
Ferramentas de API (Insomnia, Postman):

### Aplicativos:

Utilize ferramentas como Insomnia ou Postman para realizar requisições diretamente aos endpoints da API.
Configure as requisições com os métodos adequados (GET, POST, PUT, DELETE) e os parâmetros necessários.
Curl:

### Curl:

Faça requisições diretamente pelo terminal usando o comando curl.

### Formulários:

Utilize os formulários disponíveis na interface para inserir e atualizar dados.
Preencha os campos obrigatórios e envie o formulário para cadastrar ou atualizar um equipamento.

Lembre-se de que para as requisições diretas (como via Insomnia, Postman ou Curl), é necessário estar ciente dos endpoints disponíveis na API e dos parâmetros necessários para cada operação.

## Rotas da API

#### Retorna todos os Equipamentos

```http
  GET /equipamentos
```

#### Retorna um item

```http
  GET /equipamentos/${id}
```

| Parâmetro | Tipo  | Descrição             |
| :-------- | :---- | :-------------------- |
| `id`      | `int` | **Obrigatório**. O ID |

```http
  PUT /equipamentos/${id}
```

| Parâmetro | Tipo  | Descrição             |
| :-------- | :---- | :-------------------- |
| `id`      | `int` | **Obrigatório**. O ID |

```http
  DELETE /equipamentos/${id}
```

| Parâmetro | Tipo  | Descrição             |
| :-------- | :---- | :-------------------- |
| `id`      | `int` | **Obrigatório**. O ID |

```http
  GET /equipamentos?nome=${nome}
```

| Parâmetro | Tipo     | Descrição             |
| :-------- | :------- | :-------------------- |
| `nome`    | `string` | **Obrigatório**. O ID |

#### Retorna todos os Setores

```http
  GET /setores
```

#### Retorna um item

```http
  GET /setores/${id}
```

| Parâmetro | Tipo  | Descrição             |
| :-------- | :---- | :-------------------- |
| `id`      | `int` | **Obrigatório**. O ID |

```http
  PUT /setores/${id}
```

| Parâmetro | Tipo  | Descrição             |
| :-------- | :---- | :-------------------- |
| `id`      | `int` | **Obrigatório**. O ID |

```http
  DELETE /setores/${id}
```

| Parâmetro | Tipo  | Descrição             |
| :-------- | :---- | :-------------------- |
| `id`      | `int` | **Obrigatório**. O ID |

```http
  GET /setores?nome=${nome}
```

| Parâmetro | Tipo     | Descrição             |
| :-------- | :------- | :-------------------- |
| `nome`    | `string` | **Obrigatório**. O ID |

## Formulários

![Exemplo de Imagem](/imagens/exemplo.png)

node init -y

node install express

...
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
...

Variaveis (const,var, let)
Arrays

Cria uma lista  (Array) com os itens atraves do comando(const).


Instalar o nodemon para atualizar aplicação automatica.
npm install --save-dev nodemon

Criar um script no package.json para facilitar o processo de atualização

...
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
...

Agora criamos ENDPOINT POST para enviar os dados para o servidor.


Json{
    JSON.parse() Transforma string para objeto
    JSON.stringfy() Transforma objeto em string
}

Exibir uma unico item utilizando o READ BY ID, uma forma de exibir os dados unicos.

Criando BD via mongoDB

Criar um collection dentro do MongoDB compass
Onde pode ser cadastrado qualquer tipo de dados.

Instalar o mongodb via `npm i mongodb`

Depois dentro do servidor, vamos importar `MongoClient e ObjectId` de `mongodb`

const { MongoClient, ObjectId} = require("mongodb");

Depois criamos uma constante url, onde iremos colocar o caminho do BD.
Em seguida iremos referenciar o BD exatamento com o nome que criamos.

Como a conexão demora um pouco precisamos do await dentro de uma função assincrona

Depois criamos um client, para iniciarmos a conexão, mas ao utilizarmos `MongoClient.conect(url)` temos uma promessa de retorno, obrigando criar uma função assincrona, pois precisamos utilizar o await.
.


login bd = admin
password = "GMJLGJJdjnBRlETE"

URL: mongodb+srv://admin:GMJLGJJdjnBRlETE@cluster0.1pyepns.mongodb.net/


Tutorial:https://miro.com/app/board/uXjVPGdjF2Y=/
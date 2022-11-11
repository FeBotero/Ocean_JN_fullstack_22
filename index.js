const express = require('express');
const { MongoClient, ObjectId, MongoInvalidArgumentError} = require("mongodb");

// URL mongo local
//const url = "mongodb://localhost:27017";
// URL mongo Servidor Mongo Atlas
const url = "mongodb+srv://admin:GMJLGJJdjnBRlETE@cluster0.1pyepns.mongodb.net/";
const bancoDadosNome = "ocean_jn_fullstack";

// Em torno de tudo
async function  main (){

  console.log("Conectando ao banco de dados...")
  // Realiza conexão com o client
  const client = await MongoClient.connect(url);
  
  // Obtem acesso ao banco de dados
  const bancoDados = client.db(bancoDadosNome);
  
  // Obtem acesso à collection
  const collection = bancoDados.collection("Itens")

  console.log("Banco de dados conecatado com sucesso!")
  const app = express()
  const port = 3000

// Sinalizamos que estamos usando JSON no body
app.use(express.json());


// Endpoint principal
app.get('/', function (req, res) {
  res.send(`Servidor rodando na porta ${port}`)
})


app.get('/oi', function(req,res){
    res.send(`Olá mundo!`)
})

// Lista de informações

const itens = [
  "Kimino",
  "Marata",
  "Manaus"
  
]

//  Endpoint [GET] /itens - READ ALL (Ler todos itens)
app.get("/itens",async function (req,res){
  
  // Leio todos os docuemtnos da collection  
  const documentos = await collection.find().toArray();
  
  // Envio como resposta para o endpoint
  res.send(documentos);
});

// Endpoint [GET] /itens/:id - READ BY ID (Ler um item)
app.get("/itens/:id",async function (req,res){
  // Pegamos o paramentro de rota ID
  const id = req.params.id;

  // Acessamos o item pelo indice
  const item = await collection.findOne(
    {
      _id: new ObjectId(id),
    });

  // validação se temos esse id no banco
  if(!item){
    res.send("ID não encontradao");
    return;
  };

  // Exibimos o item encontrado
  res.send(item);
});


//  Endpoint [POST] /itens - CREATE ALL (Criar itens)
app.post("/itens",async function (req,res){
  
  // PEgamos o objeto inteiro enviado no body
  const item = req.body;
  // Inserindo item na collection
  await collection.insertOne(item);

  // Exibimos uma mensagem de sucesso
  res.send("Item criado com sucesso");
})

// Endpoint [UPDATE] /itens/:id  - UPDATE BY ID (Atualizada pelo ID)
app.put("/itens/:id",async function (req,res){
  // Pegamos o parametro de rota ID
  const id = req.params.id;

  // Pegamos o objeto e a modificação
  const item = req.body

  // Atualizamos o item dentro do banco de dados
 await collection.updateOne(
  {_id:ObjectId(id)},
  { $set:item }
 )
  
  // Mensagem de alteração com sucesso
  res.send("Item atualziado com sucesso!")

})

//  Endpoint [DELETE] - DELETE BY ID(Remover pelo ID)
app.delete("/itens/:id",async function(req,res){
  const id = req.params.id;

  // delete produto
  await collection.deleteOne({
    _id: new ObjectId(id),
  })
  
  // Mensagem de sucesso de exclusão
  res.send("PRoduto removido com sucesso!")

})

// START Servidor 
app.listen(process.env.PORT || port,function(){
    console.log(`Servidor rodando na porta ${port}`)
});
}

main();

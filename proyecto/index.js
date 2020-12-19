const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient} = require('mongodb');


const app = express()
const port = 3000


const dbName = 'Transporte'
const url = 'mongodb://localhost:27017/'+dbName
const client = new MongoClient(url, {useUnifiedTopology: true});


async function conectar(){
  await client.connect(function(err){
    if(err){
      console.log('err')
      return
    }
    console.log('conectado a mongo')
  })
}


conectar()
app.use(bodyParser.json())

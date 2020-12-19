const express = require('express');
const server = express.server();

const crud = require('./crud');

server.get('/',(req,res)=>{
res.render('index.html');
});


server.post('/Agregar', async (req, res)=>{
console.log(new crud(req.body));
res.redirect('index.html');
});

server.get('/Eliminar/:id',(req, res) =>{
const {id} = req.params;
crud.remove({_id:id});
});


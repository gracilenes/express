const express = require("express");
const path = require("path")
const app = express();

const PORT = 3000;

app.get('/', (req, res)=> {
    //res.send("Olá, mundo 3!");
    res.sendFile(path.join(__dirname, 'index,html'));
});

app.get('/hell0', (req, res)=> {
    res.send("Olá, Usuário!");
});

app.post('/user', (req, res)=> {
    const user = req.body;
    console.log("Informações do usuário:", user);
    res.status(201).send('Usuário ${user.txtNome} criado!');
});

app.get('/user/:id', (red, res)=> {
    const idUser = req params,id;
    res.send('Detalhes do usuário com ID: ${idUser}');
})

app.listen(PORT, ()=> {
    console.log("Servidor rodando na porta 3000");
})


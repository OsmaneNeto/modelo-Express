const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;
const logging = require('../middleware/logging');
const estudantes = [
    {
        nome: "Yeshua",
        sobrenome: "Hamashia",
        email: "Ya'akov",
        id: 1
    },
    {
        nome: "Osmane",
        sobrenome: "Barbosa",
        email: "Ya'akov",
        id: 2
    },{
        nome: "A",
        sobrenome: "B",
        email: "Ya'akov",
        id: 3
    }
]

app.use(logging);

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res)=>{
    res.send("Elon musk");
});

app.get('/estudantes', (req, res)=>{
    res.json(estudantes);
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});


app.listen(PORT, ()=>{
    console.log(`Porta: ${PORT}`);
});
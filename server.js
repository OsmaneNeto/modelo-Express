const express = require('express');
const app = express();
const PORT = 3300;
const logging = require('./logging');
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


app.get('/', (req,res)=>{
    res.send(estudantes);
});

app.get('/estudantes', (req, res)=>{
    res.json(estudantes);
});

app.listen(PORT, ()=>{
    console.log(`Porta: ${PORT}`);
});
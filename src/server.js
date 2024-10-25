const express = require('express');
const app = express();
const PORT = 3300;
const logging = require('./middlewares/logging');
const path = require('path');
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



app.get('/estudantes', (req, res)=>{
    res.json(estudantes);
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
    
});

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir o index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'components', 'App'));
  });
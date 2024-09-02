const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

//app.

app.get('/baunilha', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'PesoIdeal_Consulta.html'));
});

app.get('/teste', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'teste.html'));
});

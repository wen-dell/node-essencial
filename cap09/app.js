var express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configura uma rota na raiz
app.get('/', function(req, res) {
    res.status(500).json({msg: 'Ooops, não foi possível atender esta requisição'});
});

app.get('/pessoa', function(req, res) {
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.status(200).type("text");
    res.send(nome + " " + sobrenome);
});

app.post('/pessoa', function(req, res) {
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    // Testa o valor do cabeçalho content-type
    if (req.is("json")) {
        res.json({nome: nome, sobrenome: sobrenome});
    } else {
        res.type("text").send("Texto: " + nome + " " + sobrenome);
    }
});

app.get('/pessoa/:id', function(req, res) {
    let id = req.params.id;
    res.send("Buscar a pessoa: " + id);
});

let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://%s:%s", host, port);
});
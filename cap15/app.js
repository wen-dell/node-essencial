let express = require('express');
let db = require('./model/mongodb');
let app = express();

let bodyParser = require('body-parser');

app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.use(bodyParser.urlencoded({limit: '10mb', extended: false}));
app.use(bodyParser.json());

app.use('/api/carros', require('./routes/carros'));
app.use('/api/upload', require('./routes/upload'));
app.use(express.static(__dirname + '/view'));

app.use('/teste_erro', function(req, res) {
    throw Error('Erro Ninja');
});

app.use(function(req, res, next) {
    res.status(404);
    res.json({err: "Não encontrado"});
});

// Rota genérica de erro 500
app.use(function(err, req, res, next) {
   console.log(err);
   res.status(500);
   res.json({erro: "Ocorreu um erro: " + err.message});
});

db.connect(function(err) {
    if (err) {
        console.log('Erro ao conectar no Mongo');
        process.exit(1);
    } else {
        console.log("MongoDB conectado: ", db);

        let server = app.listen(3000, function() {
            let host = server.address().address;
            let port = server.address().port;
            console.log("Servidor node no ar http://%s:%s", host, port);
        });
    }
});

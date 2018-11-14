var http = require('http');
var url = require('url');

const CarroDB = require('./CarroDB');

function getCarros(response, tipo) {
    CarroDB.getCarrosByTipo(tipo, function (carros) {
        var json = JSON.stringify(carros);
        response.end(json);
    });
}

function salvarCarro(response, carro) {
    CarroDB.save(carro, function(carro) {
        console.log("Carro salvo com sucesso: " + carro.id);
        var json = JSON.stringify(carro);
        response.end(json);
    });
}

function callback(request, response) {
    var parts = url.parse(request.url);
    var path = parts.path;

    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

    if (request.method == 'GET') {
        if (path == '/carros/classicos') {
            getCarros(response, "classicos");
        } else if (path == '/carros/esportivos') {
            getCarros(response, "esportivos");
        } else if (path == '/carros/luxo') {
            getCarros(response, "luxo");
        } else {
            response.end("Not found: " + path);
        }
    } else if (request.method == 'POST') {
        var body = '';

        request.on('data', function(data) {
            body += data;
        });

        request.on('end', function() {
            console.log("POST Body: " + body);

            let carro = JSON.parse(body);
            salvarCarro(response, carro);
        });

        return;
    }

}

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000/");
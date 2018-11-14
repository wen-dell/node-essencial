var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'livro',
    password: 'livro123',
    database: 'livro'
});

connection.connect();

let sql = "select id, nome, tipo from carro";
connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    let carros = results;

    for (let i = 0; i < carros.length; i++) {
        console.log(carros[i].id + ": " + carros[i].nome);
    }
});

connection.end();
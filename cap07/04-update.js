var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'livro',
    password: 'livro123',
    database: 'livro'
});

connection.connect();

let sql = "update carro set ? where id = ?";

var json = {id: 31, nome: "Meu Carro Update", tipo: "esportivos"};
let id = json.id;

connection.query(sql, [json, id], function(error, results, fields) {
    if (error) throw error;
    console.log("Carro atualizado com sucesso.");
    console.log("Quantidade de registros atualizados: " + results.affectedRows);
});

connection.end();
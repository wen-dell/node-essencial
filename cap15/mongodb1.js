let MongoClient = require('mongodb').MongoClient;

let mongoServer = 'mongodb://localhost:27017';

MongoClient.connect(mongoServer, function(err, client) {
    if (err) return callback(err);

    let db = client.db('livro');

    let carros = db.collection('carros');

    carros.find({}).toArray(function(error, results) {
        for (let carro of results) {
            console.log(carro);
        }
    });
});
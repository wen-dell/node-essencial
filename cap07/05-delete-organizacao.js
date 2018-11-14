const CarroDB = require('./CarroDB');

var carro = {id: 1};

CarroDB.delete(carro, function(carro) {
    console.log("Carro Deletado: " + carro.id);
});
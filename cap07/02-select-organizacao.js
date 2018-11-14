const CarroDB = require('./CarroDB');
CarroDB.getCarroById(11, function(carro) {
    console.log(carro.id + ": " + carro.nome);
});
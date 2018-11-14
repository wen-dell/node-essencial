const CarroDB = require('./CarroDB');

CarroDB.getCarros(function(carros) {
    for (let i = 0; i < carros.length; i++) {
        console.log(carros[i].id + ": " + carros[i].nome);
    }
});
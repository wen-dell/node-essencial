const CarroDB = require('./CarroDB');

var carro = { nome: "Meu Carro", tipo: "esportivos" };
CarroDB.save(carro, function(carro) {
    console.log("Carro Salvo: " + carro.id + ":" + carro.nome);
});


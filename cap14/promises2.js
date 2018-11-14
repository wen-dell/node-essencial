const CarroDB = require('./model/CarroDB');

function teste() {
    let promise = CarroDB.getCarros();

    promise.then(function(carros) {
        console.log(JSON.stringify(carros));
    }).catch(function(error) {
        console.log('Ahan!');
        console.log(error);
    });
}

teste();
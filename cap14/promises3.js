const CarroDB = require('./model/CarroDB');

async function teste() {
    let carros = await CarroDB.getCarros(); // Bloqueio
    console.log(JSON.stringify(carros));
}

teste();
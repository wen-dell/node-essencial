let db = require('./mongodb');

let ObjectId = require('mongodb').ObjectID;

class CarroDB {

    static getCarros() {

        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.find({}).toArray(function(error, result) {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            });
        });

    }

    static getCarrosByTipo(tipo) {

        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.find({"tipo": tipo}).toArray(function(error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });

    }

    static getCarroById(id) {

        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.findOne({"_id": ObjectId(id)}, function(error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });

    }

    static save(carro) {

        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.insert(carro, function(error, response) {
                if (error) {
                    reject(error);
                }
                resolve(carro);
            });
        });

    }

    static update(carro) {

        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            let id = carro._id;
            delete carro._id;

            carros.update({"_id": ObjectId(id)}, carro, function(error, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(carro);
                }
            });
        });

    }

    static deleteById(id) {
        return new Promise(function (resolve, reject) {
            let carros = db.get().collection('carros');
            carros.removeOne({"_id": ObjectId(id)}, function(error, r) {
                if (error) {
                    return reject(error);
                }
                resolve(r.result.n);
            });
        });

    }

};

module.exports = CarroDB;
let express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');
const exec = require('../utils');

router.get('/', exec(async (req, res, next) => {
    let carros = await CarroDB.getCarros();
    res.json(carros);
}));

router.get('/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let carro = await CarroDB.getCarroById(id);
    res.json(carro);
}));

router.delete('/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let affectedRows = CarroDB.deleteById(id);
    res.json({msg: affectedRows > 0 ? 'Carro deletado com sucesso.' : 'Nenhum carro excluído'});
}));

router.get('/:tipo', exec(async (req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await CarroDB.getCarrosByTipo(tipo);
    res.json(carros);
}));

router.post('/', exec(async (req, res, next) => {
    let carro = await CarroDB.save(req.body);
    res.json(carro);
}));

router.put('/', exec(async(req, res, next) => {
    let carro = await CarroDB.update(req.body);
    res.json({msg: 'Carro atualizado com sucesso.W'});
}));

module.exports = router;
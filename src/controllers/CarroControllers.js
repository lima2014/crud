const CarroServices = require('../services/CarroServices');

module.exports = {
    buscarTodos: async(req, res) => {
        let json = { error: '', result: [] };
        let carros = await CarroServices.buscarTodos();

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = { error: '', result: {} };
        let codigo = req.params.codigo;
        let carro = await CarroServices.buscarUm(codigo);
        if (carro) {
            json.result = carro;
        }
        res.json(json);

    }


}
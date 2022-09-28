const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros', (error, results) => {
                if (error) {
                    rejeitado(error);
                    roturn;
                }
                aceito(results);
            });
        });
    },
    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros where codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }

            });
        })
    },

    //Insere no banco de dados as informações de modelo e placa
    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)', [modelo, placa],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
                }

            );
        });
    }

};
  const express = require('express');
  const router = express.Router();

  const CarroControllers = require('./controllers/CarroControllers');

  router.get('/carros', CarroControllers.buscarTodos);
  router.get('/carro/:codigo', CarroControllers.buscarUm);
  router.post('/carro', CarroControllers.inserir);
  router.put('/carro/:codigo', CarroControllers.alterar);
  router.delete('/carro/:codigo', CarroControllers.excluir);


  module.exports = router;
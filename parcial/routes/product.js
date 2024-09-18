const routes = require('express').Router();
const {
findAll,
findById,
save,
update,
} = require('./../controllers/product-controllers');

// Rutas para gestionar productos
routes.get('/', findAll);
routes.get('/:id', findById);
routes.post('/', save);
routes.put('/:idR', update);


module.exports = routes;

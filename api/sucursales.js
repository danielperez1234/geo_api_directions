const SucursalController = require('../controller/sucursal');
const express = require('express');
const router = express.Router();

router.get('/findAll',SucursalController.findAllSucursales);
router.post('/add', SucursalController.addSucursal);

module.exports = router;
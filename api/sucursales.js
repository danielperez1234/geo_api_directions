const SucursalController = require('../controller/sucursal');
const express = require('express');
const router = express.Router();

router.post('/add', SucursalController.addSucursal);

module.exports = router;
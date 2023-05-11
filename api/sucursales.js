//*Se importanlos controles de sucursal en la variable "SucursalController"
const SucursalController = require('../controller/sucursal');
//*Se importa el modulo de "express" para crear una instancia.
const express = require('express');
//*Crea una instancia de del enrutador de express. 
//*Este sirve para definir las rutas y los controladores hacia las rutas
const router = express.Router();

/*Defina una ruta de tipo GET en "/findAll".
Cuando se recibe una solicitud GET en esta ruta, se llama el metodo
"findAllSucursales" dentro del controlador de sucursales.*/
router.get('/findAll',SucursalController.findAllSucursales);
/*Defina una ruta de tipo POST en "/add". cuando esta se recibe,
se llama el método "addSucursal" del controlador de sucural*/
router.post('/add', SucursalController.addSucursal);

/*Exporta el enrutador para que se pueda utilizar en otros archivos*/
module.exports = router;
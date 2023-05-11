const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SucursalSchema = new Schema({
    name: { type: String },
    manager_name: { type: String },
    latitude: { type: String },
    longitude: { type: String },
});
/*Exporta el modelo 'Sucursal' para que pueda ser 
utilizado en otros archivos. Esto crea y exporta 
un modelo de datos llamado 'Sucursal' basado en el 
esquema definido anteriormente. El modelo se 
registra en Mongoose utilizando el nombre 'Sucursal' 
y se enlaza al esquema SucursalSchema.*/
module.exports = Sucursal = mongoose.model('Sucursal', SucursalSchema);
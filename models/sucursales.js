const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SucursalSchema = new Schema({
    name: {type: String},
    manager_name: {type: String},
    latitude: {type: String},
    longitude: {type: String},
});
module.exports = Sucursal = mongoose.model('Sucursal', SucursalSchema);
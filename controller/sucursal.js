const mongoose = require('mongoose');
const User = require('../models/sucursales');
const addSucursal = (req, res) => {
    let sucursal = new Sucursal({
        name: req.body.name,
        manager_name: req.body.manager_name,
        latitude : req.body.latitude,
        longitude : req.body.longitude
    });
    sucursal.save().then((suc) => {
        res.status(200).json(suc);
    },
    err => {
        err && res.status(500).send(err.message);
    });
  };

  module.exports = {addSucursal}
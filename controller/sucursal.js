const mongoose = require('mongoose');
const Sucursal = require('../models/sucursales');

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

const findAllSucursales = (req, res) => {
    Sucursal.find().then(sucursales => {
        res.status(200).json(sucursales);
    },
        err => {
            err && res.status(500).send(err.message)
        }
    );
}


const updateSucursalLocation = (req, res) => {
    console.log(req.body);
    Sucursal.updateOne({ _id: req.body._id }, {
        latesltLatitude: req.body.latitude,
        latestLongitude: req.body.longitude
    }).then((suc) => {
        res.status(200).json(suc);
    },
        err => {
            err && res.status(500).send(err.message);
        }
    );
}

const findSucursalByName = (req, res) => {
    console.log(req.params.name);
    Sucursal.find({ name: req.params.name }).then((suc) => {
        res.status(200).json(user);
    },
        err => {
            err && res.status(500).send(err.message);
        }
    );
}


module.exports = { addSucursal, findAllSucursales, findSucursalByName, updateSucursalLocation }
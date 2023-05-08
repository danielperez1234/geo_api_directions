const UserController = require('../controller/users');
const express = require('express');
const router = express.Router();
router.get('/findAllGeoUsers', UserController.findAllGeoUsers);
router.get('/all', UserController.findAllUsers);
router.get('/:id', UserController.findById);
router.get('/byusername/:username', UserController.findByUsername);
router.post('/add', UserController.addUser);
router.post('/updateUserLocation', UserController.updateUserLocation);

module.exports = router;
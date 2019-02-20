'use strict'

var express = require ('express');
const router = express.Router();


//controllers
const librosCtrl = require('../controllers/libros.controller');

router.get('/', librosCtrl.getLibros);
router.post('/das', librosCtrl.postLibros)

module.exports = router;


'use strict'
const Libros = require('../models/libros');

const librosCtrl = {};

librosCtrl.getLibros = async (req,res) => {

   const libros = await Libros.find();
   res.json(libros);

}

librosCtrl.postLibros =  (req, res) => {

     console.log(req.body); 
    res.json({
        status : 'Hecho'
    }) 

}

module.exports = librosCtrl;


/*
res.json({
       status: 'Probando'
   });
*/

/*
const libros = new Libros(req.body);
    await libros.save();
    res.json({
        status: 'Empleado Guardado'
    });
*/
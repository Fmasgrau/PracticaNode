'use strict'

var mongoose = require ('mongoose');
var  Schema  = mongoose.Schema;

var librosSchema =  Schema ({

    name: String,
    edicion: Number,

    
},
{versionKey : false}
);

//const librosModel = mongoose.model('libros', librosSchema);
module.exports = mongoose.model('libro', librosSchema);
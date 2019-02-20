'use strict'

var mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/libros')
        .then(db => console.log('DB esta conectada'))
        .catch(err => console.error(err));

module.exports = mongoose;
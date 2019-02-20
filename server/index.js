'use strict'

var express = require ('express');
var app = express ();
const morgan = require('morgan');
const cors = require('cors');
app.use(require('./routes/routes'));
const bodyParser = require('body-parser');

//Base de datos
const { mongoose} = require('./database');

//Puerto por defecto
const port = 4000;

app.set('port', process.env.PORT || port);

//middlewares
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.use (morgan('dev'));
app.use (cors({origin: '*'}));



//conexión

app.listen(app.get('port'), () => {
    console.log('Server on port' + ' ' + app.get('port'));
});


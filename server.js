const express = require('express');
/*Importa el modulo de "body-parser" para analizar los datos
que se envian en el cuerpo de las solicitudes HTTP*/
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Sucursal = require('./api/sucursales');
//*Habilita el acceso cruzado entre dominios.
const cors = require('cors');
const app = express();
//*Analiza las solicitudes con datos codificados en la URL.
app.use(bodyParser.urlencoded({ extended: false }));
//*Analiza las solicitudes con datos en formato JSON
app.use(bodyParser.json());


var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('./sslcerts/selfsigned.pkey', 'utf8');
var certificate = fs.readFileSync('./sslcerts/selfsigned.cer', 'utf8');
var credentials = {key: privateKey, cert: certificate};


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/sucursales', Sucursal);

var httpsServer = https.createServer(credentials, app);

const ip = "172.18.70.100"; //cambiar IP

const corsOptions = {
  origin: "http://172.18.70.100:4000",
};

/*Monta las rutas y controladores reacionados con las 
sucursales en la ruta base*/
app.use('/api/sucursales', Sucursal);
/*Permite el accesso de recursos cruzados(CORS) y agregar el encabezado
a las respuestas*/
app.use(
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    next();
  }
)

app.use(cors(corsOptions));

mongoose.connect(
  "mongodb://127.0.0.1:27017",
  { useNewUrlParser: true }
).then(/*then() se utiliza para manejar la promesa devuelta por mongoose;
si la conexion es correcta, se inicia el servidor.*/
  () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    app.listen(4000, () => {
      console.log('Server running on http://' + ip + ':4000');
      // console.log('Server running on http://127.0.0.1:4000');
    })
  },
  err => { /** handle initial connection error */
    err & console.log(err) & console.log('Error connecting to db');
  }
);

/*En resumen, este código configura y ejecuta un servidor Express, 
se conecta a una base de datos MongoDB utilizando Mongoose, 
y establece las rutas y controladores relacionados con las sucursales.
 Además, se habilita el middleware CORS para permitir el acceso a 
 recursos cruzados y se configuran los middleware de análisis de 
 solicitudes para manejar los datos enviados en el cuerpo de las 
 solicitudes HTTP. */
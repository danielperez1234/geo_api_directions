const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Sucursal =require('./api/sucursales');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const ip = "172.18.70.62";

app.use('/api/sucursales', Sucursal);
app.use(
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    next();
  }
)
mongoose.connect(
  "mongodb://127.0.0.1:27017",
  { useNewUrlParser: true }
).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
          app.listen(4000, ()=>{
            console.log('Server running on http://'+ip+':4000');
              // console.log('Server running on http://127.0.0.1:4000');
          })
  },
  err => { /** handle initial connection error */ 
          err & console.log(err) & console.log('Error connecting to db');
  }
);
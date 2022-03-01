require('dotenv').config()

const express = require('express');
const routerApi = require('./router');
const { logErrors, errorHandler, boomerrorHandler,ormErrorHandler } = require('./middleware/error.handler.js')
const { checkApiKey } = require('./middleware/auth.handler')

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.json())
//const whitelist = ['http://localhost:8080', 'https://myapp.co', 'http://localhost:3000/'];
/*const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}*/
app.use(cors());

require('./utils/auth')

app.get('/', (req, res) =>{
  res.send('Hola mundo!')
})

app.get('/new-rout', checkApiKey, (req, res) =>{
  res.send('Hola soy la nueva ruta!')
})

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomerrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log('Server runnig in  ' +  port);
});




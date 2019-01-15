const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/product.route')

//mongoose connection
let conn_url = 'mongodb://root:sa123456@ds157654.mlab.com:57654/productstutorial';
let mongoDB = process.env.MONGODB_URL || conn_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',err=>{
    console.error(err);
}).on('connected',()=>{
    console.log(`MongoDB connection open`);
})

//init express
const app = express();

//handle the request and response
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/product', product);

//listen to the port
let port = 8088;
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
})


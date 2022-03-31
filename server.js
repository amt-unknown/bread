//DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {console.log('connected to mongo: ', process.env.MONGO_URI)}
)

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!');
});

//Breads
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);



//404 page
app.get('*', (req,res) => {
    res.status(404).send('404 error: page does not exist');
});

//LISTEN
app.listen(PORT,() => {
    console.log('nomming at port', PORT);
});
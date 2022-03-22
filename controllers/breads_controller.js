//DEPENDENCIES
const express = require('express');


//CONFIGURATION
const breads = express();
const Bread = require('../models/bread.js');

//INDEX
breads.get('/', (req, res) => {
    res.render('Index',
    {
        breads: Bread,
    })
    //res.send(Bread)
});

//EXPORTS
module.exports = breads;
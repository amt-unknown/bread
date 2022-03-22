//DEPENDENCIES
const express = require('express');


//CONFIGURATION
const breads = express();
const Bread = require('../models/bread.js');

//INDEX
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex]);
});

//EXPORTS
module.exports = breads;
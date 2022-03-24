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
        title: 'Index Page'
    })
    //res.send(Bread)
});

//SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]){
        res.render('Show', {
            bread: Bread[req.params.arrayIndex],
        })
    } else {
        res.send('404 error: page does not exist')
    }
    // res.send(Bread[req.params.arrayIndex])
})

//EXPORTS
module.exports = breads;
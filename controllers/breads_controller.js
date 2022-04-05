//DEPENDENCIES
const express = require('express');
const Bread = require('../models/bread.js');
const Baker = require('../models/baker.js');

//CONFIGURATION
const breads = express();


//INDEX
breads.get('/', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.find()
            .then(foundBreads => {
                res.render('Index',
                {
                    breads: foundBreads,
                    bakers: foundBakers,
                    title: 'Index Page'
                })
            })
        })
});



//CREATE
breads.post('/', (req, res) => {
        if (!req.body.image) {
            req.body.image = undefined
        }
        if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
        } else {
        req.body.hasGluten = false
        }
    Bread.create(req.body)
    res.redirect('/breads')
  })

//NEW
breads.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers =>  {
            res.render('new', {
                bakers: foundBakers
            })
        })
})

//SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .populate('baker')
        .then(foundBread => {
            res.render('show', {
                bread: foundBread,
            })
        })
        .catch(err => {
            res.send('404')
        })
})

//EDIT
breads.get('/:id/edit', (req,res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.findById(req.params.id)
                .then(foundBread => {
                    res.render('edit', {
                        bread: foundBread,
                        bakers: foundBakers
                })
            })
        })
       
})

//UPDATE
breads.put('/:id', (req, res) => {
    if (req.body.hasGluten ==='on'){
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => {
            res.redirect(`/breads/${req.params.id}`)
        })
})

//DELETE
breads.delete('/:id', (req,res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then(deletedBread => {
            res.status(303).redirect('/breads')
        })
})





//EXPORTS
module.exports = breads;
const express = require('express');
const router = express.Router();
const Vegetable = require('../models/vegetables.js');

//Index
router.get('/', (req, res) => {
    Vegetable.find({}, (error, allVegetables) => {
        res.render('vegetables/Index', {
            vegetables: allVegetables
        })
    })
});

//New
//get /vegetables/new
router.get('/new', (req, res) => {
    res.render('vegetables/New');
})

//DELETE
router.delete('/:id', (req, res) => {
    Vegetable.findByIdAndRemove(req.params.id, (err, vegetable) => {
        res.redirect('/vegetables');
    });
});

//UPDATE
router.put('/:id', (req, res) => {
    req.body.isGreen = req.body.isGreen === "on" ? true : false;

    // Update the Vegetable document using our model
    Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/vegetables');
    });
});


//Create
//post /vegetables
router.post('/', (req, res) => {
    if(req.body.isGreen === "on") {
        req.body.isGreen = true;
    } else {
        req.body.isGreen = false;
    }

    Vegetable.create(req.body, (error, createdVegetable) =>{
        console.log(createdVegetable);
        res.redirect('/vegetables');
    });
});

//EDIT
router.get('/:id/edit', (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        res.render('vegetables/Edit', {
            vegetable: foundVegetable
        });
    });
});

//SHOW
router.get('/:id', (req, res) => {
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
        res.render('vegetables/Show', {
            vegetable: foundVegetable
        });
    });
});

module.exports = router;
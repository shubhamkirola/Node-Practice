const express = require('express');
const router = express.Router();
const MenuItem = require('./../Menu.js');

router.post('/', async (req, res) => {
    try {
        const Menudata = new MenuItem(req.body);
        const savedData = await Menudata.save();
        res.status(200).json(savedData);
    }
    catch(err) {
        res.status(200).json({err})
    }
})

//parameterised call
router.get('/:taste', async (req, res) => {
    try{
        const taste = req.params.taste;
        if(taste === 'sweet' || taste === 'spicy' || taste === 'sour'){
            const showData = await MenuItem.find({taste : taste});
            res.status(200).json(showData);
        }
    }
    catch(err){
        res.status(500).json("Invalid endpoint" + {err})
    }
})

//normal call
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        res.status(200).json(data);
    }
    catch(err) {
        res.status(500).json({err});
    }
})

router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const response = new MenuItem.findByIdAndUpdate(id, updatedData, {
            new : true,
            runValidators : true
        })
        if(!response){
            res.status(404).json('menuItem not found');
        }
        res.status(200).json(response);
    }
    catch(err){
        res.status(500).json("Cannot Update")
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const response = MenuItem.findByIdAndDelete(id);

        if(!response){
            res.status(404).json('record not found');
        }
        res.status(200).json(response);
    }
    catch(err){
        res.status(500).json("Invalid Error")
    }
})

module.exports = router;
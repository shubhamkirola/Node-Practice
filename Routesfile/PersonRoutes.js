const express = require('express');
const router = express.Router();
const Person = require('./../Person.js');


router.get('/:work', async (req, res) => {
    const work = req.params.work;
    try {
        if (work === 'chef' || work ==='waiter' || work ==='manager' || work ==="SDE" || work ==="Dancer"){
        const data = await Person.find({work: work})
        res.status(200).json(data);
        }
    }
    catch(err){
        res.status(500).json({err})
    }
})


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const personData = new Person(data);
        console.log("data1")
        const savedData = await personData.save();
        console.log("data")
        res.status(200).json(savedData);
    }
    catch(err){
        res.status(500).json("Internal error" + err);
    }
})

router.put('/:id', async (req, res) => {
    try{
        const personId = req.params.id;
        const updatedData = req.body;
        
        const response = await Person.findByIdAndUpdate(personId, updatedData, {
            new : true,
            runValidators : true
        })
        if(!response){
            return res.status(404).json("Person Not Found")
        }
        res.status(200).json(response);
    }
    catch{
        res.status(500).json("Internal error" + err);
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json("Person Not Found")
        }
        res.status(200).json("Deleted")
    }
    catch{
        res.status(500).json("Internal error" + err)
    }
})

module.exports = router;
const router = require('express').Router()
const Bread = require('../models/bread')

// GET: all the bread
router.get('/', (req, res) => {
    // res.render('index')
    res.send(Bread)
    })

// GET: get a bread by its index (query parameter)
router.get('/:index', (req,res) => {
    const {index} = req.params
    res.send(Bread[index])
})


module.exports = router

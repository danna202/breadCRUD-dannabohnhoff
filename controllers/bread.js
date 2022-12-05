const router = require('express').Router()
const Bread = require('../models/bread')


router.get('/', (req, res) => {
    res.render('index', { 
        breads: Bread
    }) 
   
 })


router.get('/new', (req,res) => {
        res.render('new')
})

router.get('/:index', (req,res) => {
    const { index } = req.params
    res.render('show', {
        bread: Bread[index]
    })
})

router.post('/', (req,res) => {
    const { hasGluten, image } = req.body
    if (!image) req.body.image ='https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c291Z2hkb3VnaCUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')

})


module.exports = router

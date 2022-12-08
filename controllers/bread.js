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

router.get('/:index/edit', (req, res) => {
    const { index } = req.params
    const bread = Bread[index]
    res.render('edit', {
        bread,
        index
    })
})

router.get('/:index', (req,res) => {
    const { index } = req.params
        res.render('show', {
        bread: Bread[index],
        index
    })
})

router.post('/', (req,res) => {
    const { hasGluten, image } = req.body
    if (!image) req.body.image ='https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
    
    if (hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }

    try {
        new URL(image)
     } catch (error) {
        console.log('error saving image:', error)
        res.render('new', {
           error: 'not a valid image' 
        })
        return
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

router.put('/:index', (req, res) => {
    const { index, image, hasGluten } = req.params
    if (!image) req.body.image ='https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
    if (hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    } 

    Bread[index] = req.body
    res.redirect(`/breads/${index}`)

})

//Delete a bread

router.delete('/:index', (req, res) => {
    const { index } = req.params
    const numIndex = Number(index)
    Bread.splice(numIndex, 1)
    res.status(303).redirect('/breads')
  })

    


module.exports = router

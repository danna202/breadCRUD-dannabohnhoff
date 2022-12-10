const router = require('express').Router()
const Bread = require('../models/bread')


router.get('/', async (req, res) => {
    const bread = await Bread.find()
        res.render('index', { 
        breads: bread
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

router.post('/', async(req,res) => {
    const { hasGluten, image } = req.body
    // if (!image) req.body.image ='https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
    if (hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
        let mongoRes = await Bread.create(req.body)
        console.log(mongoRes)
    res.redirect('/breads')

    // try {
    //     new URL(image)
    //  } catch (error) {
    //     console.log('error saving image:', error)
    //     res.render('new', {
    //        error: 'not a valid image' 
    //     })
    //     return
    //  }
        
    // res.redirect('/breads')
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

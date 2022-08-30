const router = require('express').Router();
const { Beer, Favourites, Ingredients, Pizza, User } = require('../models');



// all GET requests

// home page
router.get('/', async (req, res) => {
    res.status(200).render('homepage')
})

router.get('/menu', async (req, res) => {
    res.status(200).render('menu')
})




module.exports = router;






const router = require('express').Router();
const { Beer, Favourites, Ingredients, Pizza, User } = require('../models');



// all GET requests

// home page
router.get('/', async (req, res) => {
    res.status(200).send('Home page')
})


router.get('/register', async (req, res) => {
    res.status(200).render('register.handlebars')
})



module.exports = router;






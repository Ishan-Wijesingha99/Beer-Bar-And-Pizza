const router = require('express').Router();
const { Beer, Favourites, Ingredients, Pizza, User } = require('../models');



// all GET requests

// home page
router.get('/', async (req, res) => {
    res.status(200).send('Home page')
})






module.exports = router;





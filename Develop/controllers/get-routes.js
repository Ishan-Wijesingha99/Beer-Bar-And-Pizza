const router = require('express').Router();
const { Beer, Favourites, Ingredients, Pizza, User } = require('../models');



// all GET requests

// home page
router.get('/', async (req, res) => {
    
    try {
        res.status(200).render('homepage')   
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }

})






module.exports = router;






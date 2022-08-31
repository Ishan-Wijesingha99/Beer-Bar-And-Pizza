const router = require('express').Router();
const { Beer, Favourites, Ingredients, Pizza, User } = require('../models');
const session = require('express-session');


router.post('/register', async (req, res) => {
    console.log("post working");
    console.log(req.body);

    try {
      const dbUserData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
  
      // Set up sessions with a 'loggedIn' variable set to `true`
    
    //TO BE FIXED
      //   req.session.save(() => {
    //     req.session.loggedIn = true;
  
    //     res
    //       .status(200)
    //       .json({ user: dbUserData, message: 'You are now logged in!' });
    //   });
      
      
      
    
    } 
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });




module.exports = router;
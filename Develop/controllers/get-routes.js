const router = require('express').Router();
const { Beer, Favourites, Ingredients, Pizza, User } = require('../models');
const session = require('express-session');



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

// pizza menu page
router.get('/pizza', async (req, res) => {
    const pizzaData = await Pizza.findAll().catch((err) => { 
        res.json(err);
      });
        const pizza = pizzaData.map((pizza) => pizza.get({ plain: true }));
        console.log(pizza);
        res.render('pizza', { pizza });
      });

//pizza by id
router.get('/pizza/:id', async (req, res) => {
    try{ 
        const pizzaData = await Pizza.findByPk(req.params.id);
        if(!pizzaData) {
            res.status(404).json({message: 'No dish with this id!'});
            return;
        }
        const pizza = pizzaData.get({ plain: true });
        console.log(pizza);
        res.render('pizza', pizza);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

  //pizza registration page
router.get('/register', async (req,res)=>{
       res.render('register');

}


)





module.exports = router;
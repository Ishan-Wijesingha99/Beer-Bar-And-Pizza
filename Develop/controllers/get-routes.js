const router = require("express").Router();
const { Beer, Favourites, Ingredients, Pizza, User } = require("../models");

// all GET requests

// home page
router.get("/", async (req, res) => {
  try {
    res.status(200).render("homepage", { loggedIn: req.session.loggedIn });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});
// about us
router.get("/aboutus", async (req, res) => {
  try {
    res.status(200).render("aboutus");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

//contact us


router.get("/contactus", async (req, res) => {
  try {
    res.status(200).render("contactus");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// pizza menu page
router.get("/pizza", async (req, res) => {
  const pizzaData = await Pizza.findAll().catch((err) => {
    res.json(err);
  });
  const pizza = pizzaData.map((pizza) => pizza.get({ plain: true }));
  console.log(pizza);
  res.render("pizza", { pizza });
});

//pizza by id
router.get("/pizza/:id", async (req, res) => {
  try {
    const pizzaData = await Pizza.findByPk(req.params.id);
    if (!pizzaData) {
      res.status(404).json({ message: "No dish with this id!" });
      return;
    }
    const pizza = pizzaData.get({ plain: true });
    console.log(pizza);
    res.render("pizza", pizza);
  } catch (err) {
    res.status(500).json(err);
  }
});
//pizza registration page
router.get("/register", async (req, res) => {
  res.render("register");
});

// login page
router.get("/login", async (req, res) => {
  res.status(200).render("login");
});

router.get("/order",async(req,res)=>{
  res.status(200).render("order");
})

module.exports = router;

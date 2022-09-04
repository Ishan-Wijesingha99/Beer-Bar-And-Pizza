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

// findstore page
router.get("/findstore", async (req, res) => {
  try {
    res.status(200).render("findstore");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// feedback page
router.get("/feedback", async (req, res) => {
  try {
    res.status(200).render("feedback");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// investor relations page
router.get("/investorrelations", async (req, res) => {
  try {
    res.status(200).render("investorrelations");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// media enquiry page
router.get("/mediaenquiry", async (req, res) => {
  try {
    res.status(200).render("mediaenquiry");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// pizza menu page
router.get("/menu", async (req, res) => {
  const pizzaData = await Pizza.findAll().catch((err) => {
    res.json(err);
  });
  const pizza = pizzaData.map((pizza) => pizza.get({ plain: true }));
  console.log(pizza);
  res.render("menu", { pizza });
});

//pizza registration page
router.get("/register", async (req, res) => {
  res.render("register");
});

// login page
router.get("/login", async (req, res) => {
  res.status(200).render("login");
});

// order page
router.get("/order",async(req,res)=>{
  res.status(200).render("order");
})

// cart page
router.get("/cart", async (req, res) => {
  try {
    const arrayOfStrings = []

    for(let i=1; i <= 4; i++) {
      
      if(eval(`req.session.menuItem${i}`)) {
        eval(`arrayOfStrings.push('${i} EXISTS!')`)
      }

    }

    res.status(200).render("cart", {arrayOfStrings});


  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;

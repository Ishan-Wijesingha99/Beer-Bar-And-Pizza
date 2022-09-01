const router = require("express").Router();

const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;

const pizzaRoutes = require("./pizza-routes");

router.use("/pizza", pizzaRoutes);

module.exports = router;

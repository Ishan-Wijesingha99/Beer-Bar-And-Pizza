const router = require("express").Router();

const userRoutes = require("./userRoutes");
const feedbackRoutes = require("./feedbackroutes");
router.use("/users", userRoutes);
router.use("/feedback", feedbackRoutes);

const pizzaRoutes = require("./pizza-routes");

router.use("/menu", pizzaRoutes);

module.exports = router;

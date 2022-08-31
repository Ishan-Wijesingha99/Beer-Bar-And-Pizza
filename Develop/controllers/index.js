const router = require("express").Router();
const getRoutes = require("./get-routes.js");
const apiRoutes = require("./api");
const postRoutes = require('./user-routes.js');
router.use("/api", apiRoutes);
router.use("/", getRoutes);
router.use('/',postRoutes);
module.exports = router;

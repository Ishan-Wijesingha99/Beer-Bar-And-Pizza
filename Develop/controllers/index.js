const router = require('express').Router();

const getRoutes = require('./get-routes.js');
const postRoutes = require('./user-routes.js');

router.use('/', getRoutes);
router.use('/',postRoutes);



module.exports = router;
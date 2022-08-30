const router = require('express').Router();

const getRoutes = require('./get-routes.js');

router.use('/', getRoutes);



module.exports = router;
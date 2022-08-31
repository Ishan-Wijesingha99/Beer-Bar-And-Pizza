const router = require('express').Router();

const getRoutes = require('./get-routes.js');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', getRoutes);



module.exports = router;
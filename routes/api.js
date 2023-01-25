const router = require('express').Router();

const { checkToken, checkAdmin, checkRole } = require('../helpers/middlewares');

router.use('/clients', checkToken, checkAdmin, require('./api/clients'));

router.use('/travels', checkToken, checkRole('admin', 'user'), require('./api/travels'));

router.use('/hotels', checkToken, checkRole('user'), require('./api/hotels'));

router.use('/users', require('./api/users'));


module.exports = router;
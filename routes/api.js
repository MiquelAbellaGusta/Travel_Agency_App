const router = require('express').Router();

router.use('/clients', require('./api/clients'));
router.use('/travels', require('./api/travels'));
router.use('/hotels', require('./api/hotels'));

module.exports = router;
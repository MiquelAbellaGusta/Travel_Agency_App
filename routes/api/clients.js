const router = require('express').Router();

const { getAll, create } = require('../../models/client.model');

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});


module.exports = router;
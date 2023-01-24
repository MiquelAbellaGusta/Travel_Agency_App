const router = require('express').Router();

const { getAll, getById, create, update, deleteById } = require('../../models/travel.model');

//GET

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:travelId', async (req, res) => {
    const { travelId } = req.params;

    try {
        const [result] = await getById(travelId);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el viaje' });
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

//POST

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);

        const [travel] = await getById(result.insertId);

        res.json(travel[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

//PUT
router.put('/:travelId', async (req, res) => {
    const { travelId } = req.params;

    try {
        const [result] = await update(travelId, req.body);

        const [travel] = await getById(travelId);

        res.json(travel[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});
//DELETE

router.delete('/:travelId', async (req, res) => {
    const { travelId } = req.params;

    try {
        const [result] = await deleteById(travelId);

        res.json({ message: 'Se ha eliminado el viaje seleccionado' });

    } catch (error) {
        res.json({ fatal: error.message });
    }
});


module.exports = router;
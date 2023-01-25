const router = require('express').Router();

const bcrypt = require('bcryptjs');

const { createToken } = require('../../helpers/utils');
const { create, getByEmail } = require('../../models/user.model');

router.post('/register', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);

        const [result] = await create(req.body);
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/login', async (req, res) => {

    const [users] = await getByEmail(req.body.email);
    if (users.length === 0) {
        return res.json({ fatal: 'Error usuario y/o contraseña' });
    }

    const user = users[0];

    const same = bcrypt.compareSync(req.body.password, user.password);
    if (!same) {
        return res.json({ fatal: 'Error usuario y/o contraseña' });
    }

    res.json({
        success: 'Bienvenido' + '' + user.username,
        token: createToken(user)
    });
});


module.exports = router;
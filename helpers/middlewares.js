const jwt = require('jsonwebtoken');

const { getById } = require('../models/user.model');

const checkToken = async (req, res, next) => {

    if (!req.headers['authorization']) {
        return res.json({ fatal: 'Tienes que incluir la cabecera Authorization' });
    }

    const token = req.headers['authorization'];


    let obj;

    try {
        obj = jwt.verify(token, 'travel security pass');

    } catch (error) {
        console.log(error.message);

        return res.json({ fatal: 'Token incorrecto' });
    }

    const [result] = await getById(obj.user_id);
    req.user = result[0];

    next();
}

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.json({ fatal: 'Debes ser administrador para acceder a esta zona' });
    }
    next();
}

const checkRole = (role1, role2) => {
    return (req, res, next) => {
        if (req.user.role !== role1 | role2) {
            return res.json({ fatal: `zona restringida. Solo para ${role1} o ${role2}` });
        }
        next();
    };
}

module.exports = {
    checkToken, checkAdmin, checkRole
}
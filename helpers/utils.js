const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const obj = {
        user_id: user.id,
        user_role: user.role,
        exp: dayjs().add(90, 'days').unix()
    }
    return jwt.sign(obj, 'travel security pass');
}

module.exports = {
    createToken
}
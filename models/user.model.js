//GET

const getByEmail = (email) => {
    return db.query('select * from users where email = ?', [email]);
}

const getById = (userId) => {
    return db.query('select * from users where id = ?', [userId]);
}


//POST

const create = ({ username, email, password }) => {
    return db.query(
        'insert into users (username, email, password) values (?, ?, ?)',
        [username, email, password]
    )
}

module.exports = {
    create, getByEmail, getById
}
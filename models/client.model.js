//GET

const getAll = () => {
    return db.query('select * from clients');
}

const getById = (clientId) => {
    return db.query('select * from clients where id = ?', [clientId]);
}

//POST

const create = ({ name, surname, address, phone, birth, email, dni }) => {
    return db.query(
        'insert into clients (name, surname, address, phone, birth, email, dni) values (?, ?, ?, ?, ?, ?, ?)',
        [name, surname, address, phone, birth, email, dni]
    );
}



//PUT

const update = (clientId, { name, surname, address, phone, birth, email, dni }) => {
    return db.query(
        'update clients set name=?, surname=?, address=?, phone=?, birth=?, email=?, dni=? where id = ?',
        [name, surname, address, phone, birth, email, dni, clientId]
    )
}

const updateHotel = (clientId, hotelId) => {
    return db.query('update clients set hotel_id=? where id=?', [hotelId, clientId])
}
const updateTravel = (clientId, travelId) => {
    return db.query('update clients set travel_id=? where id=?', [travelId, clientId])
}

//DELETE

const deleteById = (clientId) => {
    return db.query('delete from clients where id = ?', [clientId]);
}

module.exports = {
    getAll, getById, getByTravelId, create, update, updateHotel, updateTravel, deleteById
}
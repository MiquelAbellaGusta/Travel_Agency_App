//GET

const getAll = () => {
    return db.query('select * from hotels');
}

const getById = (hotelId) => {
    return db.query('select * from hotels where id = ?', [hotelId]);
}

const getHotelClients = (hotelId) => {
    return db.query('select * from clients where hotel_id=?', [hotelId]);
}

const getHotelByStars = (starsNum) => {
    return db.query('select * from hotels where stars=?', [starsNum])
}

const getHotelByCity = (city) => {
    return db.query('select * from hotels where city contains=?', [city])
}

//POST

const create = ({ name, address, city, stars, description, tariff }) => {
    return db.query(
        'insert into hotels (name, address, city, stars, description, tariff) values (?, ?, ?, ?, ?, ?,)',
        [name, address, city, stars, description, tariff]
    );
}


//PUT

const update = (hotelId, { name, address, city, stars, description, tariff }) => {
    return db.query(
        'update hotels set name=?, address=?, city=?, stars=?, description=?, tariff=? where id = ?',
        [name, address, city, stars, description, tariff, hotelId]
    )
}

//DELETE

const deleteById = (hotelId) => {
    return db.query('delete from hotels where id = ?', [hotelId]);
}

//EXPORTS

module.exports = {
    getAll, getById, create, update, deleteById, getHotelClients, getHotelByStars, getHotelByCity
}
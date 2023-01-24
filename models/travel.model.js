//GET

const getAll = () => {
    return db.query('select * from travels');
}

const getById = (travelId) => {
    return db.query('select * from trafvels where id = ?', [travelId]);
}

const getTravelClients = (travelId) => {
    return db.query('select * from clients where travel_id=?', [travelId])
}
//GET DEPARTURES
const getTravelByDepartureId = (departureId) => {
    return db.query('select * from travels where departure_id=?', [departureId])
}
const getTravelByDepartureDate = (date) => {
    return db.query('select * from travels where departure_date=?', [date])
}

//GET ARRIVALS

const getTravelByArrivalId = (arrivalId) => {
    return db.query('select * from travels where arrival_id=?', [arrivalId])
}
const getTravelByArrivalDate = (date) => {
    return db.query('select * from travels where arrival_date=?', [date])


}


//POST

const create = ({ departure_date, arrival_date, departure_id, arrival_id }) => {
    return db.query(
        'insert into travels (departure_date, arrival_date, departure_id, arrival_id) values (?, ?, ?, ?)',
        [departure_date, arrival_date, departure_id, arrival_id]
    );
}


//PUT

const update = (travelId, { departure_date, arrival_date, departure_id, arrival_id }) => {
    return db.query(
        'update travels set departure_date=?, arrival_date=?, departure_id=?, arrival_id=? where id = ?',
        [departure_date, arrival_date, departure_id, arrival_id, travelId]
    )
}

//DELETE

const deleteById = (travelId) => {
    return db.query('delete from travels where id = ?', [travelId]);
}

//EXPORTS

module.exports = {
    getAll, getById, getTravelClients, getTravelByDepartureId, getTravelByDepartureDate, getTravelByArrivalId, getTravelByArrivalDate, create, update, deleteById
}
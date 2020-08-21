const rooms = require('./roomsController');
const roomTypes = require('./roomTypesController');
const guests = require('./guestsController');
const bookings = require('./bookingsController');

module.exports = {
    rooms,
    roomTypes,
    guests,
    bookings
};
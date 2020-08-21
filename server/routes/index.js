const {
    rooms:roomsController,
    roomTypes:roomTypesController,
    guests:guestsController,
    bookings:bookingsController
} = require('../controllers');

module.exports = (app) => {
   
    //Routes for Rooms.
    app.post('/api/room', roomsController.create);
    app.get('/api/rooms', roomsController.list);
    app.get('/api/room/:room_num', roomsController.get);
    app.put('/api/room/:room_num', roomsController.update);
    app.delete('/api/room/:room_num', roomsController.destroy);

    //Routes for RoomTypes.
    app.post('/api/room_type', roomTypesController.create);
    app.get('/api/room_types', roomTypesController.list);
    app.get('/api/room_type/:name', roomTypesController.get);
    app.put('/api/room_type/:name', roomTypesController.update);
    app.delete('/api/room_type/:name', roomTypesController.destroy);

    //Routes for Guests.
    app.post('/api/guest', guestsController.create);
    app.get('/api/guests', guestsController.list);
    app.get('/api/guest/:id', guestsController.get);
    app.put('/api/guest/:id', guestsController.update);
    app.delete('/api/guest/:id', guestsController.destroy);

    //Routes for Bookings.
    app.post('/api/booking', bookingsController.create);
    app.get('/api/bookings', bookingsController.list);
    app.get('/api/booking/:id', bookingsController.get);
    app.put('/api/booking/:id', bookingsController.update);
    app.delete('/api/booking/:id', bookingsController.destroy);
}
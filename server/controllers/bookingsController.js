const {Booking} = require('../models');

module.exports = {
    create(req, res) {
        console.log(req.params)
        return Booking
        .create({
            GuestId : req.body.guest_id,
            RoomId : req.body.room_num,
            from : req.body.from,
            till : req.body.till,
            bill : req.body.bill,
            num_guests : req.body.num_guests,
        })
        .then(booking => res.status(201).send(booking))
        .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Booking
        .findAll()
        .then(bookings => res.status(200).send(bookings))
        .catch(error => res.status(400).send(error));
    },

    get(req, res) {
        return Booking
        .findByPk(req.params.id)
        .then(booking => {
            if (!booking) {
                return res.status(404).send({
                    message:`Booking with id ${req.params.id} not found`
                });
            }
            return res.status(200).send(booking);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Booking
        .findByPk(req.params.id)
        .then(booking => {
            if (!booking) {
                return res.status(404).send({
                    message:`Booking with id ${req.params.id} not found`
                });
            }
            return booking
            .update(req.body, {fields: Object.keys(req.body)})
            .then(updated_booking => res.status(200).send(updated_booking))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return Booking
        .findByPk(req.params.id)
        .then(booking => {
            if (!booking) {
                return res.status(404).send({
                    message:`Booking with id ${req.params.id} not found`
                });
            }
            return booking
            .destroy()
            .then(() => res.status(200).send(`Booking with id ${req.params.id} deleted.`))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
}
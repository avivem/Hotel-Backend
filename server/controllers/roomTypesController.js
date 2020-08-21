const {RoomType} = require('../models');

module.exports = {
    create(req, res) {
        return RoomType
        .create({
            name : req.body.name,
            max_occupancy : req.body.max_occupancy,
            rate : req.body.rate
        })
        .then(roomtype => res.status(201).send(roomtype))
        .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return RoomType
        .findAll()
        .then(roomtypes => res.status(200).send(roomtypes))
        .catch(error => res.status(400).send(error));
    },

    get(req, res) {
        return RoomType
        .findByPk(req.params.name)
        .then(roomtype => {
            if (!roomtype) {
                return res.status(404).send({
                    message:`RoomType ${req.params.name} not found`
                });
            }

            return res.status(200).send(roomtype);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return RoomType
        .findByPk(req.params.name)
        .then(roomtype => {
            if (!roomtype) {
                return res.status(404).send({
                    message:`RoomType ${req.params.name} not found`
                });
            }

            return roomtype
            .update(req.body, {fields: Object.keys(req.body)})
            .then(updated_roomtype => res.status(200).send(updated_roomtype))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return RoomType
        .findByPk(req.params.name)
        .then(roomtype => {
            if (!roomtype) {
                return res.status(404).send({
                    message:`RoomType ${req.params.name} not found`
                });
            }

            return roomtype
            .destroy()
            .then(() => res.status(200).send(`RoomType ${req.params.name} deleted.`))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
}
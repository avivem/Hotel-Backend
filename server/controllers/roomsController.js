const {Room} = require('../models');

module.exports = {
    create(req,res) {
        return Room
        .create({
            room_num : req.body.room_num,
            floor: req.body.floor,
            good_view: req.body.good_view,
            RoomTypeName: req.body.room_type
        })
        .then(room => res.status(201).send(room))
        .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Room
        .findAll()
        .then(rooms => res.status(200).send(rooms))
        .catch(error => res.status(400).send(error));
    },

    get(req,res) {
        return Room
        .findByPk(req.params.room_num)
        .then(room => {
            if (!room) {
                return res.status(404).send({
                    message:`Room ${req.params.room_num} not found`
                });
            }
            
            return res.status(200).send(room)
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Room
        .findByPk(req.params.room_num)
        .then(room => {
            if (!room) {
                return res.status(404).send({
                    message:`Room ${req.params.room_num} not found`
                });
            }
            
            return room
            .update(req.body, {fields: Object.keys(req.body)})
            .then(updated_room => res.status(200).send(updated_room))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return Room
        .findByPk(req.params.room_num)
        .then(room => {
            if (!room) {
                return res.status(404).send({
                    message:`Room ${req.params.room_num} not found`
                });
            }
            
            return room
            .destroy()
            .then(() => res.status(204).send(`Room ${req.params.room_num} deleted.`))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
}
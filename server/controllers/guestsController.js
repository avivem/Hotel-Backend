const {Guest} = require('../models');

module.exports = {

    create(req, res) {
        return Guest
        .create({
            name : req.body.name,
            loyalty_pts : req.body.loyalty_pts
        })
        .then(guest => res.status(201).send(guest))
        .catch(error => res.status(400).send(error));
    },

    //Later, add option to find guests currently staying.

    list(req, res) {
        return Guest
        .findAll()
        .then(guests => res.status(200).send(guests))
        .catch(error => res.status(400).send(error));
    },

    get(req, res) {
        return Guest
        .findByPk(req.params.id)
        .then(guest => {
            if (!guest) {
                return res.status(404).send({
                    message:`Guest with id ${req.params.id} not found`
                });
            }
            return res.status(200).send(guest);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Guest
        .findByPk(req.params.id)
        .then(guest => {
            if (!guest) {
                return res.status(404).send({
                    message:`Guest with id ${req.params.id} not found`
                });
            }
            return guest
            .update(req.body, {fields: Object.keys(req.body)})
            .then(updated_guest => res.status(200).send(updated_guest))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return Guest
        .findByPk(req.params.id)
        .then(guest => {
            if (!guest) {
                return res.status(404).send({
                    message:`Guest with id ${req.params.id} not found`
                });
            }
            return guest
            .destroy()
            .then(() => res.status(200).send(`Guest with id ${req.params.id} deleted.`))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
}
const express = require('express'),
    router = express.Router()

const db = require('../models')
const controllers = require("../controllers/messages");

router.post('/signup', (req, res) => {
    const body = req.body;

    db.User.create(body)
        .then((newUser) => {
            res.status(201).json(newUser);
        })
        .catch((err) => {
            res.json(err);
        })
})

module.exports = router;
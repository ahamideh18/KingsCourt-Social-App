const express = require('express'),
    router = express.Router()

const db = require('../models')
const controllers = require("../controllers/messages");

console.log(db)
router.route('/')
    .get(controllers.getMessages)
    .post(controllers.createMessage)

router.route('/:message_id')
    .get(controllers.getMessage)
    .delete(controllers.deleteMessage)

module.exports = router;
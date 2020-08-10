const express = require('express'),
    router = express.Router()

const controllers = require('../controllers/messages');
const middleware = require('../middleware/auth')

router.route('/')
    .get(controllers.getMessages)
    .post(middleware.checkAuth, controllers.createMessage)

router.route('/:message_id')
    .get(controllers.getMessage)
    .delete(middleware.checkMessageOwner, controllers.deleteMessage)

module.exports = router;
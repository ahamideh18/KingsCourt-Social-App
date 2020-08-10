const express = require('express'),
    router = express.Router()
    
const controllers = require("../controllers/users");

router.post('/signup', controllers.signUp)
router.post('/signin', controllers.signIn)
router.get('/logout', controllers.logout)

module.exports = router;
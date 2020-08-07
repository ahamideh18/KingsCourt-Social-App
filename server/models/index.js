var mongoose = require('mongoose');

User = require('./models/user')

mongoose.connect('mongodb://localhost/kc-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

module.exports.User = require("./models/user");
module.exports.Message = require("./models/message");
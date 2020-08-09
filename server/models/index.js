var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kc-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

module.exports.User = require("./user");
module.exports.Message = require("./message");
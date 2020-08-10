const jwt = require('jsonwebtoken');

var db = require('../models');

exports.checkMessageOwner = (req, res, next) => {
    const token = req.cookies.nToken;
    const decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
    
    if (req.user) {
        db.Message.findById(req.params.message_id, (err, foundMessage) => {
            if (err) {
                res.status(400).json("MESSAGE NOT FOUND");
            } else {
                if (foundMessage.author.equals(req.user._id)) {
                    next();
                } else {
                    res.status(403).json("INCORRECT USER");
                }
            }
        });
    } else {
        res.status(403).json("NOT AUTHENTICATED");
    }
}

exports.checkAuth = (req, res, next) => {
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
        req.user = null;
        return res.status(400).json("NOT AUTHENTICATED")
    } else {
        const token = req.cookies.nToken;
        const decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
    }
    next();
};

module.exports = exports;
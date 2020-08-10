const jwt = require('jsonwebtoken');

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
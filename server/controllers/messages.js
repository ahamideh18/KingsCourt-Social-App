var db = require('../models');

exports.getMessages = (req, res) => {
    db.Message.find()
        .then((messages) => {
            res.json(messages);
        })
        .catch((err) => {
            res.send(err);
        })
}

exports.getMessage = (req, res) => {
    db.Message.findOne({ _id: req.params.message_id })
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.send(err)
        })
}

exports.createMessage = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'Message cannot be empty',
        })
    }

    const message = new db.Message({ ...req.body, author: req.user._id })
    message.save()
        .then(() => {
            return db.User.findById(req.user._id);
        })
        .then((user) => {
            user.messages.unshift(message);
            user.save();
        })
        .then(() => {
            res.status(201).json(message)
        })
        .catch((err) => {
            res.json(err);
        })
}

exports.deleteMessage = (req, res) => {
    db.Message.deleteOne({ _id: req.params.message_id })
        .then(() => {
            res.json({ message: 'DELETED' });
        })
        .catch((err) => {
            res.send(err);
        })
}

module.exports = exports;
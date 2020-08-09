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
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Message cannot be empty',
        })
    }

    db.Message.create(body)
        .then((newMessage) => {
            res.status(201).json(newMessage);
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
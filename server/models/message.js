const mongoose = require('mongoose');
const User = require('./user')

var messageSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 248
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: Number,
        default: 0
    },
    replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    ]
}, { timestamps: true });

messageSchema.pre('remove', { query: true }, function (callback) {
    console.log('reee has been removed');
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
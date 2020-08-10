const mongoose = require('mongoose');

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

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
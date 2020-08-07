const mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 248
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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
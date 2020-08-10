const express = require('express'),
    app = express()

const bodyParser = require('body-parser'),
    cors = require('cors'),
    cookieParser = require('cookie-parser')

require('dotenv').config();

const messageRouter = require('./routes/messages')
const authRouter = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.json("HELLO SERVER")
});

app.use('/api/messages', messageRouter);
app.use('/api/user', authRouter)

app.listen(process.env.PORT || 3003, () => {
    console.log('Server running on port 3003')
})

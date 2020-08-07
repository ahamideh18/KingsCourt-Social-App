const express = require('express'),
    app = express()

app.get('/', (req, res) => {
    res.send("HELLO SERVER")
});

app.listen(process.env.PORT || 3003, () => {
    console.log('Server running on port 3003')
})

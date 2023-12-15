const express = require('express');
const app = express();


app.get('/hello', (req, res) => {
    res.send('foi');
})

const port = 3000

app.listen(port, console.log('server is listering on port ...'))

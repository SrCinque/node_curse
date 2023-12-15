const express = require('express');
const app = express();
const tasks = require('./routes/tasks')


app.get('/hello', (req, res) => {
    res.send('foi');
})


app.use('/api/v1/tasks', tasks)

const port = 3000

app.listen(port, console.log(`server is listering on ${port} ...`))

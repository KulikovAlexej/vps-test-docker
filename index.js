const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send({ status: 'ok'})
})

app.get('/test', (req, res) => {
    res.send({ status: 'ok'})
})

app.listen(3000, () => {
    console.log('server is started on 3000 port')
})